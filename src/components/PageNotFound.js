import React from 'react'
import { Link } from 'react-router-dom';

export default function() {
    return (<>

        <div className="container p-5 text-center">
            
            <h3 className="display-3 py-3 font-weight-bold">Page Not Found</h3>
            <p className="text-justify py-3">Uh oh, we can’t seem to find the page you’re looking for. Try going back to the previous page or see our Help Center for more information</p>
            <Link className="btn btn-primary">Go to Your Home</Link>

        </div>
        
    </>)
}
