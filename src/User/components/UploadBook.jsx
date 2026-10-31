import React, { useEffect, useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify';
import { addBookAPI, getBookDetailsAPI } from '../../services/allApi';
import useDebounce from '../../hooks/useDebounce';

function UploadBook() {

    const [bookDetails, setBookDetails] = useState({
        title: "", author: "", imagURL: "", pages: "", price: "", discountPrice: "", abstract: "", publisher: "", isbn: "", language: "", category: "", uploadImage: []
    })
    //console.log(bookDetails);
    const [preview, setPreview] = useState("")
    const [previewList, setPreviewList] = useState([])

    //used Ai to generate Abstract
    const debounceTitleSearch = useDebounce(bookDetails.title, 1000)
    useEffect(() => {
        console.log(debounceTitleSearch);

        if (debounceTitleSearch) {
            console.log("API call");
            generateBookAbstractAI()
        }
    }, [debounceTitleSearch])


    const generateBookAbstractAI = async () => {
        try {
            const result = await getBookDetailsAPI(debounceTitleSearch)
            console.log("API Responc:e", result.data);
            if (result.data?.content) {
                setBookDetails({
                    ...bookDetails,
                    abstract: result.data.content.abstract,
                    isbn:result.data.content.isbn,
                    author:result.data.content.author
                })
            } else {
                console.error("Abstract not found in API response:", result.data)
            }
        } catch (error) {
            console.error(
                "Error generating book abstract:",
                error.response?.data || error.message
            )
        }
    }

    const handleUploadImages = (e) => {
        const imageFile = e.target.files[0]
        const uploadImageArray = bookDetails.uploadImage
        uploadImageArray.push(imageFile)
        setBookDetails({ ...bookDetails, uploadImage: uploadImageArray })
        const url = URL.createObjectURL(imageFile)
        setPreview(url)
        const demoPreviewList = previewList
        demoPreviewList.push(url)
        setPreviewList(demoPreviewList)
    }


    const resetForm = () => {
        setBookDetails({ title: "", author: "", imagURL: "", pages: "", price: "", discountPrice: "", abstract: "", publisher: "", isbn: "", language: "", category: "", uploadImage: [] })
        setPreviewList([])
        setPreview("")
    }

    const handleAddBook = async () => {
        const { title, author, imagURL, pages, price, discountPrice, abstract, publisher, isbn, language, category, uploadImage } = bookDetails
        if (!title || !author || !imagURL || !pages || !price || !discountPrice || !abstract || !publisher || !isbn || !language || !category || uploadImage.length == 0) {
            toast.info("Please fill the form completly")
        } else {
            //api call
            const reqBody = new FormData()
            for (let key in bookDetails) {
                if (key != "uploadImage") {
                    reqBody.append(key, bookDetails[key])
                } else {
                    bookDetails.uploadImage.forEach(imageFile => {
                        reqBody.append("uploadImage", imageFile)
                    })
                }
            }
            const result = await addBookAPI(reqBody)
            console.log(result);
            if (result.status == 201) {
                toast.success("Book Add successfully")
            } else {
                toast.warning(result)
            }
            resetForm()
        }
    }

    return (
        <div className='p-10 my-20 mx-5 bg-gray-100'>
            <h1 className='text-center text-3xl font-medium'>Upload Book Details</h1>
            <div className="md:grid grid-cols-2 mt-10 w-full">
                <div className="px-3">
                    <div className="mb-3">
                        <input value={bookDetails.title} onChange={e => setBookDetails({ ...bookDetails, title: e.target.value })} type="text" placeholder='Book Title' className="w-full p-2 rounded bg-white" />
                    </div>
                    <div className="mb-3">
                        <input value={bookDetails.author} onChange={e => setBookDetails({ ...bookDetails, author: e.target.value })} type="text" placeholder='Author' className="w-full p-2 rounded bg-white" />
                    </div>
                    <div className="mb-3">
                        <input value={bookDetails.imagURL} onChange={e => setBookDetails({ ...bookDetails, imagURL: e.target.value })} type="text" placeholder='Book Cover image Url' className="w-full p-2 rounded bg-white" />
                    </div>
                    <div className="mb-3">
                        <input value={bookDetails.pages} onChange={e => setBookDetails({ ...bookDetails, pages: e.target.value })} type="text" placeholder='Total page' className="w-full p-2 rounded bg-white" />
                    </div>
                    <div className="mb-3">
                        <input value={bookDetails.price} onChange={e => setBookDetails({ ...bookDetails, price: e.target.value })} type="text" placeholder='Orginal Price ' className="w-full p-2 rounded bg-white" />
                    </div>
                    <div className="mb-3">
                        <input value={bookDetails.discountPrice} onChange={e => setBookDetails({ ...bookDetails, discountPrice: e.target.value })} type="text" placeholder='Discount Price' className="w-full p-2 rounded bg-white" />
                    </div>
                    <div className="mb-3">
                        <input value={bookDetails.abstract} onChange={e => setBookDetails({ ...bookDetails, abstract: e.target.value })} type="text" placeholder='Abstract' className="w-full p-2 rounded bg-white" />
                    </div>
                </div>

                <div className="px-3">
                    <div className="mb-3">
                        <input value={bookDetails.publisher} onChange={e => setBookDetails({ ...bookDetails, publisher: e.target.value })} type="text" placeholder='Publisher' className="w-full p-2 rounded bg-white" />
                    </div>
                    <div className="mb-3">
                        <input value={bookDetails.isbn} onChange={e => setBookDetails({ ...bookDetails, isbn: e.target.value })} type="text" placeholder='ISBN' className="w-full p-2 rounded bg-white" />
                    </div>
                    <div className="mb-3">
                        <input value={bookDetails.language} onChange={e => setBookDetails({ ...bookDetails, language: e.target.value })} type="text" placeholder='Language' className="w-full p-2 rounded bg-white" />
                    </div>
                    <div className="mb-3">
                        <input value={bookDetails.category} onChange={e => setBookDetails({ ...bookDetails, category: e.target.value })} type="text" placeholder='Category' className="w-full p-2 rounded bg-white" />
                    </div>
                    {/* upload book image */}
                    <div className='mb-3 flex justify-center items-center mt-10'>
                        <label htmlFor='bookimage'>
                            {
                                preview.length < 3 ?
                                    <>
                                        <input onChange={e => handleUploadImages(e)} type="file" id='bookimage' hidden />
                                        <img width={'200px'} height={'200px'} src={preview ? preview : "https://wupengcheng.gallerycdn.vsassets.io/extensions/wupengcheng/upload-ftp/0.0.3/1663568570818/Microsoft.VisualStudio.Services.Icons.Default"} alt="" />
                                    </>
                                    :

                                    <img width={'200px'} height={'200px'} src={preview ? preview : "https://wupengcheng.gallerycdn.vsassets.io/extensions/wupengcheng/upload-ftp/0.0.3/1663568570818/Microsoft.VisualStudio.Services.Icons.Default"} alt="" />
                            }
                        </label>
                    </div>
                    {/* preview of uploaded image */}
                    {
                        preview &&
                        <div className="flex justify-center items-center">
                            {
                                previewList?.map((imagURL, index) => (
                                    <img key={`${imagURL}-${index}`} width={'70px'} height={'70px'} className='mx-2' src={imagURL} alt="book" />
                                ))
                            }
                            {
                                previewList.length < 3 &&
                                <label htmlFor="bookupload">
                                    <input onChange={e => handleUploadImages(e)} type="file" id='bookupload' hidden />
                                    <FaPlus className='text-3xl ms-2' />
                                </label>
                            }
                        </div>
                    }
                </div>
            </div>
            <div className="flex md:justify-end justify-center w-full p-5 mt-5">
                <button onClick={resetForm} className='bg-yellow-500 text-white p-3 rounded me-2'>Reset</button>
                <button onClick={handleAddBook} className='bg-green-500 text-white p-3 rounded '>Add Book</button>
            </div>
            {/* toast container */}
            <ToastContainer position='top-center' theme='colored' autoClose={3000} />
        </div>
    )
}

export default UploadBook
