import { useState } from "react";

const Form = () => {
    const [gambar, setGambar] = useState('')
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    return ( 
        <div className="coontainer border p-4">
            <h3>Input Data Card</h3>
            <hr/>
            <label htmlFor="gambar" className="mb-2 me-2">
                Gambar
                <input type="text" className="form-control"
                        placeholder="gambar" id="gambar" value={gambar}
                        onChange={(e)=>setGambar(e.target.value)}
                        />
            </label>
            <label htmlFor="title" className="label">
                Title
                <input type="text" className="form-control"
                placeholder="title" id="title" value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
            </label>
            <div className="mb-2">
                <label htmlFor="content">Content</label>
                <textarea type="text" className="from-control"
                    placeholder="content" id="content" value={content}
                    onChange={(e)=>setContent(e.target.value)}
                    />
            </div>

            <div className="d-flex flex-row--reverse mt-4">
                <button className="btn btn-primary"
                        onClick={simpan}
                >Simpan</button>
            </div>


        </div>
     );
}
 
export default Form