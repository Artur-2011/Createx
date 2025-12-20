import { FaList, FaSearch, FaTh } from 'react-icons/fa';
import './Events.css'
import { useState } from 'react';

export default function Events() {
        const eventList = [
            {
                data: "05",
                motnth: "Aughust",
                time: "11:00-14:00",
                formation: "Formation of the organizational structure of the company in the face of uncertainty.",
                master: "Onine master-class",
            },
            {
                data: "05",
                motnth: "Aughust",
                time: "11:00-14:00",
                formation: "Formation of the organizational structure of the company in the face of uncertainty.",
                master: "Onine master-class",
            },
            {
                data: "05",
                motnth: "Aughust",
                time: "11:00-14:00",
                formation: "Formation of the organizational structure of the company in the face of uncertainty.",
                master: "Onine master-class",
            },
            {
                data: "05",
                motnth: "Aughust",
                time: "11:00-14:00",
                formation: "Formation of the organizational structure of the company in the face of uncertainty.",
                master: "Onine master-class",
            },
            {
                data: "05",
                motnth: "Aughust",
                time: "11:00-14:00",
                formation: "Formation of the organizational structure of the company in the face of uncertainty.",
                master: "Onine master-class",
            },
            {
                data: "05",
                motnth: "Aughust",
                time: "11:00-14:00",
                formation: "Formation of the organizational structure of the company in the face of uncertainty.",
                master: "Onine master-class",
            },
            {
                data: "05",
                motnth: "Aughust",
                time: "11:00-14:00",
                formation: "Formation of the organizational structure of the company in the face of uncertainty.",
                master: "Onine master-class",
            },
            {
                data: "05",
                motnth: "Aughust",
                time: "11:00-14:00",
                formation: "Formation of the organizational structure of the company in the face of uncertainty.",
                master: "Onine master-class",
            },
            {
                data: "05",
                motnth: "Aughust",
                time: "11:00-14:00",
                formation: "Formation of the organizational structure of the company in the face of uncertainty.",
                master: "Onine master-class",
            }
        ];

    const [viewMode, setViewMode] = useState("grid");
    const toggleView = (mode) => {
        setViewMode(mode);
    }

    return (
        <div className='events'>
            <div class="heading">
                <h3>OUR EVENTS</h3>
                <h1>Lectures, workshops & master-classes</h1>
            </div>
            <div class="toolbar">
                <div class="category"><h4>Event category</h4> <select><option>All themes</option></select></div>
                <div class="category"><h4>Sort by</h4> <select><option>newest</option></select></div>
                <div class="category"><h4>Show</h4> <select name='per-page'><option>9</option></select><h4>Events Per page</h4></div>
                <div class="cat-search">
                    <input type="search" placeholder='Search event...' />
                    <FaSearch />
                </div>
                <div class="tool-buttons">
                    <FaList onClick={() => toggleView('list')} className={viewMode == 'list' ? 'active-view' : ''} />
                    <FaTh onClick={() => toggleView('grid')} className={viewMode == 'grid' ? 'active-view' : ''} />
                </div>
            </div>

            <div className={`event-list ${viewMode == 'grid' ? 'grid-view' : 'list-view'}`}>
                {
                    eventList.map(even => {
                        return <div className="event-content">
                            <div className="date">
                                <h2>{even.data}</h2>
                                <div className="time">
                                    <h4>{even.motnth}</h4>
                                    <p>{even.time}</p>
                                </div>
                            </div>
                            <div className="even-info">
                                <h4>{even.formation}</h4>
                                <p>{even.master}</p>
                            </div>
                            <button>View more</button>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
