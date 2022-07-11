import React, { useState, useRef, MouseEvent } from 'react'
import { Navbar } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../../../todoist/client/src/components/Sidebar';

function ResizableSidebar() {
    const sidebarRef = useRef<HTMLDivElement>(null);
    const [isResizing, setIsResizing] = useState(false);
    const [sidebarWidth, setSidebarWidth] = useState(328);

    const startResizing = React.useCallback((event: MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsResizing(true);
    }, []);

    const stopResizing = React.useCallback(() => {
        setIsResizing(false);
    }, []);

    const resize = React.useCallback(
        (event: globalThis.MouseEvent) => {
            event.preventDefault();
            if (isResizing && sidebarRef) {
                setSidebarWidth(
                    event!.clientX -
                    sidebarRef.current!.getBoundingClientRect().left
                );
            }
        },
        [isResizing]
    );

    React.useEffect(() => {
        window.addEventListener("mousemove", resize);
        window.addEventListener("mouseup", stopResizing);
        return () => {
            window.removeEventListener("mousemove", resize);
            window.removeEventListener("mouseup", stopResizing);
        };
    }, [resize, stopResizing]);

    return (
        <div className="app-container">
            <Navbar />
            <div
                ref={sidebarRef}
                className="app-sidebar"
                style={{ width: sidebarWidth }}
                onMouseDown={(e) => e.preventDefault()}
            >
                <aside className="app-sidebar-content">
                    <Sidebar />
                </aside>
                <div className="app-sidebar-resizer" onMouseDown={startResizing} />
            </div>
            <div className="app-frame" >
                <Outlet />
            </div>
        </div>
    );
}

export default ResizableSidebar