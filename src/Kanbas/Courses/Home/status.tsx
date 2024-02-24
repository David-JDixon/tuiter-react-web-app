import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function StatusBar() {
    return (
        <div className="flex-grow-0 me-2 d-none d-lg-block">
            <h3>Course Status</h3>
            <button className="btn btn-fail">Unpublished <i className="fa fa-times"></i></button>
            <button className="btn btn-success">Published <i className="fa fa-check"></i></button>

            <button className="btn btn-secondary"><i className="fa fa-file"></i> Import Existing Content</button>
            <button className="btn btn-secondary"><i className="fa fa-globe"></i> Import from Commons</button>
            <button className="btn btn-secondary"><i className="fa fa-home"></i> Choose Home Page</button>
            <button className="btn btn-secondary"><i className="fa fa-bar-chart"></i> View Course Stream</button>
            <button className="btn btn-secondary"><i className="fa fa-megaphone"></i> New Announcement</button>
            <button className="btn btn-secondary"><i className="fa fa-bar-chart"></i> New Analytics</button>
            <button className="btn btn-secondary"><i className="fa fa-bell"></i> View Course Notifications</button>
        </div>
    );
}

export default StatusBar;