import '../../assets/backend/css/vendor/fullcalendar.min.css'
import '../../assets/backend/css/icons.min.css'
import '../../assets/backend/css/app.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUser} from '@fortawesome/free-solid-svg-icons'
import React ,{  useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'
import { useUserConext } from '../../hooks/useUserContext'

function Index() {
    const { user, setUser } = useUserConext();
    const navigate = useNavigate();

    useEffect(()=>{
        if(!user) {    
            navigate('/login');
        }
    },[])


    return (
     
        <div>
            <div className="wrapper">
                <div className="leftside-menu">
                    <div className="h-100" id="leftside-menu-container" data-simplebar="">
                        <ul className="side-nav">
                            <li className="side-nav-title side-nav-item">Navigation</li>
                            <li className="side-nav-item">
                                <a
                                    data-bs-toggle="collapse"
                                    href="#sidebarDashboards"
                                    aria-expanded="false"
                                    aria-controls="sidebarDashboards"
                                    className="side-nav-link"
                                >
                                    <i className="uil-home-alt" />
                                    <span className="badge bg-success float-end">4</span>
                                    <span> Dashboards </span>
                                </a>
                                <div className="collapse" id="sidebarDashboards">
                                    <ul className="side-nav-second-level">
                                        <li>
                                            <a href="dashboard-analytics.html">Analytics</a>
                                        </li>
                                        <li>
                                            <a href="dashboard-crm.html">CRM</a>
                                        </li>
                                        <li>
                                            <a href="index.html">Ecommerce</a>
                                        </li>
                                        <li>
                                            <a href="dashboard-projects.html">Projects</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="side-nav-title side-nav-item">Apps</li>
                            <li className="side-nav-item">
                                <a href="apps-calendar.html" className="side-nav-link">
                                    <i className="uil-calender" />
                                    <span> Calendar </span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a href="apps-chat.html" className="side-nav-link">
                                    <i className="uil-comments-alt" />
                                    <span> Chat </span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a
                                    data-bs-toggle="collapse"
                                    href="#sidebarEcommerce"
                                    aria-expanded="false"
                                    aria-controls="sidebarEcommerce"
                                    className="side-nav-link"
                                >
                                    <i className="uil-store" />
                                    <span> Ecommerce </span>
                                    <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="sidebarEcommerce">
                                    <ul className="side-nav-second-level">
                                        <li>
                                            <a href="apps-ecommerce-products.html">Products</a>
                                        </li>
                                        <li>
                                            <a href="apps-ecommerce-products-details.html">
                                                Products Details
                                            </a>
                                        </li>
                                        <li>
                                            <a href="apps-ecommerce-orders.html">Orders</a>
                                        </li>
                                        <li>
                                            <a href="apps-ecommerce-orders-details.html">Order Details</a>
                                        </li>
                                        <li>
                                            <a href="apps-ecommerce-customers.html">Customers</a>
                                        </li>
                                        <li>
                                            <a href="apps-ecommerce-shopping-cart.html">Shopping Cart</a>
                                        </li>
                                        <li>
                                            <a href="apps-ecommerce-checkout.html">Checkout</a>
                                        </li>
                                        <li>
                                            <a href="apps-ecommerce-sellers.html">Sellers</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="side-nav-item">
                                <a
                                    data-bs-toggle="collapse"
                                    href="#sidebarEmail"
                                    aria-expanded="false"
                                    aria-controls="sidebarEmail"
                                    className="side-nav-link"
                                >
                                    <i className="uil-envelope" />
                                    <span> Email </span>
                                    <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="sidebarEmail">
                                    <ul className="side-nav-second-level">
                                        <li>
                                            <a href="apps-email-inbox.html">Inbox</a>
                                        </li>
                                        <li>
                                            <a href="apps-email-read.html">Read Email</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="side-nav-item">
                                <a
                                    data-bs-toggle="collapse"
                                    href="#sidebarProjects"
                                    aria-expanded="false"
                                    aria-controls="sidebarProjects"
                                    className="side-nav-link"
                                >
                                    <i className="uil-briefcase" />
                                    <span> Projects </span>
                                    <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="sidebarProjects">
                                    <ul className="side-nav-second-level">
                                        <li>
                                            <a href="apps-projects-list.html">List</a>
                                        </li>
                                        <li>
                                            <a href="apps-projects-details.html">Details</a>
                                        </li>
                                        <li>
                                            <a href="apps-projects-gantt.html">
                                                Gantt{" "}
                                                <span className="badge rounded-pill badge-light-lighten font-10 float-end">
                                                    New
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="apps-projects-add.html">
                                                Create Project{" "}
                                                <span className="badge rounded-pill badge-success-lighten font-10 float-end">
                                                    New
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="side-nav-item">
                                <a href="apps-social-feed.html" className="side-nav-link">
                                    <i className="uil-rss" />
                                    <span> Social Feed </span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a
                                    data-bs-toggle="collapse"
                                    href="#sidebarTasks"
                                    aria-expanded="false"
                                    aria-controls="sidebarTasks"
                                    className="side-nav-link"
                                >
                                    <i className="uil-clipboard-alt" />
                                    <span> Tasks </span>
                                    <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="sidebarTasks">
                                    <ul className="side-nav-second-level">
                                        <li>
                                            <a href="apps-tasks.html">List</a>
                                        </li>
                                        <li>
                                            <a href="apps-tasks-details.html">Details</a>
                                        </li>
                                        <li>
                                            <a href="apps-kanban.html">Kanban Board</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="side-nav-item">
                                <a href="apps-file-manager.html" className="side-nav-link">
                                    <i className="uil-folder-plus" />
                                    <span> File Manager </span>
                                </a>
                            </li>
                            <li className="side-nav-title side-nav-item">Custom</li>
                            <li className="side-nav-item">
                                <a
                                    data-bs-toggle="collapse"
                                    href="#sidebarPages"
                                    aria-expanded="false"
                                    aria-controls="sidebarPages"
                                    className="side-nav-link"
                                >
                                    <i className="uil-copy-alt" />
                                    <span> Pages </span>
                                    <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="sidebarPages">
                                    <ul className="side-nav-second-level">
                                        <li>
                                            <a href="pages-profile.html">Profile</a>
                                        </li>
                                        <li>
                                            <a href="pages-profile-2.html">Profile 2</a>
                                        </li>
                                        <li>
                                            <a href="pages-invoice.html">Invoice</a>
                                        </li>
                                        <li>
                                            <a href="pages-faq.html">FAQ</a>
                                        </li>
                                        <li>
                                            <a href="pages-pricing.html">Pricing</a>
                                        </li>
                                        <li>
                                            <a href="pages-maintenance.html">Maintenance</a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a
                                                data-bs-toggle="collapse"
                                                href="#sidebarPagesAuth"
                                                aria-expanded="false"
                                                aria-controls="sidebarPagesAuth"
                                            >
                                                <span> Authentication </span>
                                                <span className="menu-arrow" />
                                            </a>
                                            <div className="collapse" id="sidebarPagesAuth">
                                                <ul className="side-nav-third-level">
                                                    <li>
                                                        <a href="pages-login.html">Login</a>
                                                    </li>
                                                    <li>
                                                        <a href="pages-login-2.html">Login 2</a>
                                                    </li>
                                                    <li>
                                                        <a href="pages-register.html">Register</a>
                                                    </li>
                                                    <li>
                                                        <a href="pages-register-2.html">Register 2</a>
                                                    </li>
                                                    <li>
                                                        <a href="pages-logout.html">Logout</a>
                                                    </li>
                                                    <li>
                                                        <a href="pages-logout-2.html">Logout 2</a>
                                                    </li>
                                                    <li>
                                                        <a href="pages-recoverpw.html">Recover Password</a>
                                                    </li>
                                                    <li>
                                                        <a href="pages-recoverpw-2.html">Recover Password 2</a>
                                                    </li>
                                                    <li>
                                                        <a href="pages-lock-screen.html">Lock Screen</a>
                                                    </li>
                                                    <li>
                                                        <a href="pages-lock-screen-2.html">Lock Screen 2</a>
                                                    </li>
                                                    <li>
                                                        <a href="pages-confirm-mail.html">Confirm Mail</a>
                                                    </li>
                                                    <li>
                                                        <a href="pages-confirm-mail-2.html">Confirm Mail 2</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="side-nav-item">
                                            <a
                                                data-bs-toggle="collapse"
                                                href="#sidebarPagesError"
                                                aria-expanded="false"
                                                aria-controls="sidebarPagesError"
                                            >
                                                <span> Error </span>
                                                <span className="menu-arrow" />
                                            </a>
                                            <div className="collapse" id="sidebarPagesError">
                                                <ul className="side-nav-third-level">
                                                    <li>
                                                        <a href="pages-404.html">Error 404</a>
                                                    </li>
                                                    <li>
                                                        <a href="pages-404-alt.html">Error 404-alt</a>
                                                    </li>
                                                    <li>
                                                        <a href="pages-500.html">Error 500</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="pages-starter.html">Starter Page</a>
                                        </li>
                                        <li>
                                            <a href="pages-preloader.html">With Preloader</a>
                                        </li>
                                        <li>
                                            <a href="pages-timeline.html">Timeline</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="side-nav-item">
                                <a href="landing.html" target="_blank" className="side-nav-link">
                                    <i className="uil-globe" />
                                    <span className="badge bg-secondary text-light float-end">
                                        New
                                    </span>
                                    <span> Landing </span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a
                                    data-bs-toggle="collapse"
                                    href="#sidebarLayouts"
                                    aria-expanded="false"
                                    aria-controls="sidebarLayouts"
                                    className="side-nav-link"
                                >
                                    <i className="uil-window" />
                                    <span> Layouts </span>
                                    <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="sidebarLayouts">
                                    <ul className="side-nav-second-level">
                                        <li>
                                            <a href="layouts-horizontal.html">Horizontal</a>
                                        </li>
                                        <li>
                                            <a href="layouts-detached.html">Detached</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="side-nav-title side-nav-item mt-1">Components</li>
                            <li className="side-nav-item">
                                <a
                                    data-bs-toggle="collapse"
                                    href="#sidebarBaseUI"
                                    aria-expanded="false"
                                    aria-controls="sidebarBaseUI"
                                    className="side-nav-link"
                                >
                                    <i className="uil-box" />
                                    <span> Base UI </span>
                                    <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="sidebarBaseUI">
                                    <ul className="side-nav-second-level">
                                        <li>
                                            <a href="ui-accordions.html">Accordions</a>
                                        </li>
                                        <li>
                                            <a href="ui-alerts.html">Alerts</a>
                                        </li>
                                        <li>
                                            <a href="ui-avatars.html">Avatars</a>
                                        </li>
                                        <li>
                                            <a href="ui-badges.html">Badges</a>
                                        </li>
                                        <li>
                                            <a href="ui-breadcrumb.html">Breadcrumb</a>
                                        </li>
                                        <li>
                                            <a href="ui-buttons.html">Buttons</a>
                                        </li>
                                        <li>
                                            <a href="ui-cards.html">Cards</a>
                                        </li>
                                        <li>
                                            <a href="ui-carousel.html">Carousel</a>
                                        </li>
                                        <li>
                                            <a href="ui-dropdowns.html">Dropdowns</a>
                                        </li>
                                        <li>
                                            <a href="ui-embed-video.html">Embed Video</a>
                                        </li>
                                        <li>
                                            <a href="ui-grid.html">Grid</a>
                                        </li>
                                        <li>
                                            <a href="ui-list-group.html">List Group</a>
                                        </li>
                                        <li>
                                            <a href="ui-modals.html">Modals</a>
                                        </li>
                                        <li>
                                            <a href="ui-notifications.html">Notifications</a>
                                        </li>
                                        <li>
                                            <a href="ui-offcanvas.html">Offcanvas</a>
                                        </li>
                                        <li>
                                            <a href="ui-pagination.html">Pagination</a>
                                        </li>
                                        <li>
                                            <a href="ui-popovers.html">Popovers</a>
                                        </li>
                                        <li>
                                            <a href="ui-progress.html">Progress</a>
                                        </li>
                                        <li>
                                            <a href="ui-ribbons.html">Ribbons</a>
                                        </li>
                                        <li>
                                            <a href="ui-spinners.html">Spinners</a>
                                        </li>
                                        <li>
                                            <a href="ui-tabs.html">Tabs</a>
                                        </li>
                                        <li>
                                            <a href="ui-tooltips.html">Tooltips</a>
                                        </li>
                                        <li>
                                            <a href="ui-typography.html">Typography</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="side-nav-item">
                                <a
                                    data-bs-toggle="collapse"
                                    href="#sidebarExtendedUI"
                                    aria-expanded="false"
                                    aria-controls="sidebarExtendedUI"
                                    className="side-nav-link"
                                >
                                    <i className="uil-package" />
                                    <span> Extended UI </span>
                                    <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="sidebarExtendedUI">
                                    <ul className="side-nav-second-level">
                                        <li>
                                            <a href="extended-dragula.html">Dragula</a>
                                        </li>
                                        <li>
                                            <a href="extended-range-slider.html">Range Slider</a>
                                        </li>
                                        <li>
                                            <a href="extended-ratings.html">Ratings</a>
                                        </li>
                                        <li>
                                            <a href="extended-scrollbar.html">Scrollbar</a>
                                        </li>
                                        <li>
                                            <a href="extended-scrollspy.html">Scrollspy</a>
                                        </li>
                                        <li>
                                            <a href="extended-treeview.html">Treeview</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="side-nav-item">
                                <a href="widgets.html" className="side-nav-link">
                                    <i className="uil-layer-group" />
                                    <span> Widgets </span>
                                </a>
                            </li>
                            <li className="side-nav-item">
                                <a
                                    data-bs-toggle="collapse"
                                    href="#sidebarIcons"
                                    aria-expanded="false"
                                    aria-controls="sidebarIcons"
                                    className="side-nav-link"
                                >
                                    <i className="uil-streering" />
                                    <span> Icons </span>
                                    <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="sidebarIcons">
                                    <ul className="side-nav-second-level">
                                        <li>
                                            <a href="icons-dripicons.html">Dripicons</a>
                                        </li>
                                        <li>
                                            <a href="icons-mdi.html">Material Design</a>
                                        </li>
                                        <li>
                                            <a href="icons-unicons.html">Unicons</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="side-nav-item">
                                <a
                                    data-bs-toggle="collapse"
                                    href="#sidebarForms"
                                    aria-expanded="false"
                                    aria-controls="sidebarForms"
                                    className="side-nav-link"
                                >
                                    <i className="uil-document-layout-center" />
                                    <span> Forms </span>
                                    <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="sidebarForms">
                                    <ul className="side-nav-second-level">
                                        <li>
                                            <a href="form-elements.html">Basic Elements</a>
                                        </li>
                                        <li>
                                            <a href="form-advanced.html">Form Advanced</a>
                                        </li>
                                        <li>
                                            <a href="form-validation.html">Validation</a>
                                        </li>
                                        <li>
                                            <a href="form-wizard.html">Wizard</a>
                                        </li>
                                        <li>
                                            <a href="form-fileuploads.html">File Uploads</a>
                                        </li>
                                        <li>
                                            <a href="form-editors.html">Editors</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="side-nav-item">
                                <a
                                    data-bs-toggle="collapse"
                                    href="#sidebarCharts"
                                    aria-expanded="false"
                                    aria-controls="sidebarCharts"
                                    className="side-nav-link"
                                >
                                    <i className="uil-chart" />
                                    <span> Charts </span>
                                    <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="sidebarCharts">
                                    <ul className="side-nav-second-level">
                                        <li className="side-nav-item">
                                            <a
                                                data-bs-toggle="collapse"
                                                href="#sidebarApexCharts"
                                                aria-expanded="false"
                                                aria-controls="sidebarApexCharts"
                                            >
                                                <span> Apex Charts </span>
                                                <span className="menu-arrow" />
                                            </a>
                                            <div className="collapse" id="sidebarApexCharts">
                                                <ul className="side-nav-third-level">
                                                    <li>
                                                        <a href="charts-apex-area.html">Area</a>
                                                    </li>
                                                    <li>
                                                        <a href="charts-apex-bar.html">Bar</a>
                                                    </li>
                                                    <li>
                                                        <a href="charts-apex-bubble.html">Bubble</a>
                                                    </li>
                                                    <li>
                                                        <a href="charts-apex-candlestick.html">Candlestick</a>
                                                    </li>
                                                    <li>
                                                        <a href="charts-apex-column.html">Column</a>
                                                    </li>
                                                    <li>
                                                        <a href="charts-apex-heatmap.html">Heatmap</a>
                                                    </li>
                                                    <li>
                                                        <a href="charts-apex-line.html">Line</a>
                                                    </li>
                                                    <li>
                                                        <a href="charts-apex-mixed.html">Mixed</a>
                                                    </li>
                                                    <li>
                                                        <a href="charts-apex-pie.html">Pie</a>
                                                    </li>
                                                    <li>
                                                        <a href="charts-apex-radar.html">Radar</a>
                                                    </li>
                                                    <li>
                                                        <a href="charts-apex-radialbar.html">RadialBar</a>
                                                    </li>
                                                    <li>
                                                        <a href="charts-apex-scatter.html">Scatter</a>
                                                    </li>
                                                    <li>
                                                        <a href="charts-apex-sparklines.html">Sparklines</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="charts-brite.html">Britecharts</a>
                                        </li>
                                        <li>
                                            <a href="charts-chartjs.html">Chartjs</a>
                                        </li>
                                        <li>
                                            <a href="charts-sparkline.html">Sparklines</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="side-nav-item">
                                <a
                                    data-bs-toggle="collapse"
                                    href="#sidebarTables"
                                    aria-expanded="false"
                                    aria-controls="sidebarTables"
                                    className="side-nav-link"
                                >
                                    <i className="uil-table" />
                                    <span> Tables </span>
                                    <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="sidebarTables">
                                    <ul className="side-nav-second-level">
                                        <li>
                                            <a href="tables-basic.html">Basic Tables</a>
                                        </li>
                                        <li>
                                            <a href="tables-datatable.html">Data Tables</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="side-nav-item">
                                <a
                                    data-bs-toggle="collapse"
                                    href="#sidebarMaps"
                                    aria-expanded="false"
                                    aria-controls="sidebarMaps"
                                    className="side-nav-link"
                                >
                                    <i className="uil-location-point" />
                                    <span> Maps </span>
                                    <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="sidebarMaps">
                                    <ul className="side-nav-second-level">
                                        <li>
                                            <a href="maps-google.html">Google Maps</a>
                                        </li>
                                        <li>
                                            <a href="maps-vector.html">Vector Maps</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="side-nav-item">
                                <a
                                    data-bs-toggle="collapse"
                                    href="#sidebarMultiLevel"
                                    aria-expanded="false"
                                    aria-controls="sidebarMultiLevel"
                                    className="side-nav-link"
                                >
                                    <i className="uil-folder-plus" />
                                    <span> Multi Level </span>
                                    <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="sidebarMultiLevel">
                                    <ul className="side-nav-second-level">
                                        <li className="side-nav-item">
                                            <a
                                                data-bs-toggle="collapse"
                                                href="#sidebarSecondLevel"
                                                aria-expanded="false"
                                                aria-controls="sidebarSecondLevel"
                                            >
                                                <span> Second Level </span>
                                                <span className="menu-arrow" />
                                            </a>
                                            <div className="collapse" id="sidebarSecondLevel">
                                                <ul className="side-nav-third-level">
                                                    <li>
                                                        <a href="javascript: void(0);">Item 1</a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript: void(0);">Item 2</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="side-nav-item">
                                            <a
                                                data-bs-toggle="collapse"
                                                href="#sidebarThirdLevel"
                                                aria-expanded="false"
                                                aria-controls="sidebarThirdLevel"
                                            >
                                                <span> Third Level </span>
                                                <span className="menu-arrow" />
                                            </a>
                                            <div className="collapse" id="sidebarThirdLevel">
                                                <ul className="side-nav-third-level">
                                                    <li>
                                                        <a href="javascript: void(0);">Item 1</a>
                                                    </li>
                                                    <li className="side-nav-item">
                                                        <a
                                                            data-bs-toggle="collapse"
                                                            href="#sidebarFourthLevel"
                                                            aria-expanded="false"
                                                            aria-controls="sidebarFourthLevel"
                                                        >
                                                            <span> Item 2 </span>
                                                            <span className="menu-arrow" />
                                                        </a>
                                                        <div className="collapse" id="sidebarFourthLevel">
                                                            <ul className="side-nav-forth-level">
                                                                <li>
                                                                    <a href="javascript: void(0);">Item 2.1</a>
                                                                </li>
                                                                <li>
                                                                    <a href="javascript: void(0);">Item 2.2</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                     
                    </div>
                </div>
                <div className="content-page">
                    <div className="content">
                        {/* Topbar Start */}
                        <div className="navbar-custom">
                            <ul className="list-unstyled topbar-menu float-end mb-0">
                                <li className="dropdown notification-list d-lg-none">
                                    <a
                                        className="nav-link dropdown-toggle arrow-none"
                                        data-bs-toggle="dropdown"
                                        href="#"
                                        role="button"
                                        aria-haspopup="false"
                                        aria-expanded="false"
                                    >
                                        <i className="dripicons-search noti-icon" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-animated dropdown-lg p-0">
                                        <form className="p-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Search ..."
                                                aria-label="Recipient's username"
                                            />
                                        </form>
                                    </div>
                                </li>
                                <li className="dropdown notification-list topbar-dropdown">
                                    <a
                                        className="nav-link dropdown-toggle arrow-none"
                                        data-bs-toggle="dropdown"
                                        href="#"
                                        role="button"
                                        aria-haspopup="false"
                                        aria-expanded="false"
                                    >
                                        <img
                                            src="assets/images/flags/us.jpg"
                                            alt="user-image"
                                            className="me-0 me-sm-1"
                                            height={12}
                                        />
                                        <span className="align-middle d-none d-sm-inline-block">
                                            English
                                        </span>{" "}
                                        <i className="mdi mdi-chevron-down d-none d-sm-inline-block align-middle" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu">
                                        {/* item*/}
                                        <a
                                            href="javascript:void(0);"
                                            className="dropdown-item notify-item"
                                        >
                                            <img
                                                src="assets/images/flags/germany.jpg"
                                                alt="user-image"
                                                className="me-1"
                                                height={12}
                                            />{" "}
                                            <span className="align-middle">German</span>
                                        </a>
                                        {/* item*/}
                                        <a
                                            href="javascript:void(0);"
                                            className="dropdown-item notify-item"
                                        >
                                            <img
                                                src="assets/images/flags/italy.jpg"
                                                alt="user-image"
                                                className="me-1"
                                                height={12}
                                            />{" "}
                                            <span className="align-middle">Italian</span>
                                        </a>
                                        {/* item*/}
                                        <a
                                            href="javascript:void(0);"
                                            className="dropdown-item notify-item"
                                        >
                                            <img
                                                src="assets/images/flags/spain.jpg"
                                                alt="user-image"
                                                className="me-1"
                                                height={12}
                                            />{" "}
                                            <span className="align-middle">Spanish</span>
                                        </a>
                                        {/* item*/}
                                        <a
                                            href="javascript:void(0);"
                                            className="dropdown-item notify-item"
                                        >
                                            <img
                                                src="assets/images/flags/russia.jpg"
                                                alt="user-image"
                                                className="me-1"
                                                height={12}
                                            />{" "}
                                            <span className="align-middle">Russian</span>
                                        </a>
                                    </div>
                                </li>
                                <li className="dropdown notification-list">
                                    <a
                                        className="nav-link dropdown-toggle arrow-none"
                                        data-bs-toggle="dropdown"
                                        href="#"
                                        role="button"
                                        aria-haspopup="false"
                                        aria-expanded="false"
                                    >
                                        <i className="dripicons-bell noti-icon" />
                                        <span className="noti-icon-badge" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated dropdown-lg">
                                        {/* item*/}
                                        <div className="dropdown-item noti-title">
                                            <h5 className="m-0">
                                                <span className="float-end">
                                                    <a href="javascript: void(0);" className="text-dark">
                                                        <small>Clear All</small>
                                                    </a>
                                                </span>
                                                Notification
                                            </h5>
                                        </div>
                                        <div style={{ maxHeight: 230 }} data-simplebar="">
                                            {/* item*/}
                                            <a
                                                href="javascript:void(0);"
                                                className="dropdown-item notify-item"
                                            >
                                                <div className="notify-icon bg-primary">
                                                    <i className="mdi mdi-comment-account-outline" />
                                                </div>
                                                <p className="notify-details">
                                                    Caleb Flakelar commented on Admin
                                                    <small className="text-muted">1 min ago</small>
                                                </p>
                                            </a>
                                            {/* item*/}
                                            <a
                                                href="javascript:void(0);"
                                                className="dropdown-item notify-item"
                                            >
                                                <div className="notify-icon bg-info">
                                                    <i className="mdi mdi-account-plus" />
                                                </div>
                                                <p className="notify-details">
                                                    New user registered.
                                                    <small className="text-muted">5 hours ago</small>
                                                </p>
                                            </a>
                                            {/* item*/}
                                            <a
                                                href="javascript:void(0);"
                                                className="dropdown-item notify-item"
                                            >
                                                <div className="notify-icon">
                                                    <img
                                                        src="assets/images/users/avatar-2.jpg"
                                                        className="img-fluid rounded-circle"
                                                        alt=""
                                                    />{" "}
                                                </div>
                                                <p className="notify-details">Cristina Pride</p>
                                                <p className="text-muted mb-0 user-msg">
                                                    <small>
                                                        Hi, How are you? What about our next meeting
                                                    </small>
                                                </p>
                                            </a>
                                            {/* item*/}
                                            <a
                                                href="javascript:void(0);"
                                                className="dropdown-item notify-item"
                                            >
                                                <div className="notify-icon bg-primary">
                                                    <i className="mdi mdi-comment-account-outline" />
                                                </div>
                                                <p className="notify-details">
                                                    Caleb Flakelar commented on Admin
                                                    <small className="text-muted">4 days ago</small>
                                                </p>
                                            </a>
                                            {/* item*/}
                                            <a
                                                href="javascript:void(0);"
                                                className="dropdown-item notify-item"
                                            >
                                                <div className="notify-icon">
                                                    <img
                                                        src="assets/images/users/avatar-4.jpg"
                                                        className="img-fluid rounded-circle"
                                                        alt=""
                                                    />{" "}
                                                </div>
                                                <p className="notify-details">Karen Robinson</p>
                                                <p className="text-muted mb-0 user-msg">
                                                    <small>
                                                        Wow ! this admin looks good and awesome design
                                                    </small>
                                                </p>
                                            </a>
                                            {/* item*/}
                                            <a
                                                href="javascript:void(0);"
                                                className="dropdown-item notify-item"
                                            >
                                                <div className="notify-icon bg-info">
                                                    <i className="mdi mdi-heart" />
                                                </div>
                                                <p className="notify-details">
                                                    Carlos Crouch liked
                                                    <b>Admin</b>
                                                    <small className="text-muted">13 days ago</small>
                                                </p>
                                            </a>
                                        </div>
                                        {/* All*/}
                                        <a
                                            href="javascript:void(0);"
                                            className="dropdown-item text-center text-primary notify-item notify-all"
                                        >
                                            View All
                                        </a>
                                    </div>
                                </li>
                                <li className="dropdown notification-list d-none d-sm-inline-block">
                                    <a
                                        className="nav-link dropdown-toggle arrow-none"
                                        data-bs-toggle="dropdown"
                                        href="#"
                                        role="button"
                                        aria-haspopup="false"
                                        aria-expanded="false"
                                    >
                                        <i className="dripicons-view-apps noti-icon" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated dropdown-lg p-0">
                                        <div className="p-2">
                                            <div className="row g-0">
                                                <div className="col">
                                                    <a className="dropdown-icon-item" href="#">
                                                        <img src="assets/images/brands/slack.png" alt="slack" />
                                                        <span>Slack</span>
                                                    </a>
                                                </div>
                                                <div className="col">
                                                    <a className="dropdown-icon-item" href="#">
                                                        <img
                                                            src="assets/images/brands/github.png"
                                                            alt="Github"
                                                        />
                                                        <span>GitHub</span>
                                                    </a>
                                                </div>
                                                <div className="col">
                                                    <a className="dropdown-icon-item" href="#">
                                                        <img
                                                            src="assets/images/brands/dribbble.png"
                                                            alt="dribbble"
                                                        />
                                                        <span>Dribbble</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row g-0">
                                                <div className="col">
                                                    <a className="dropdown-icon-item" href="#">
                                                        <img
                                                            src="assets/images/brands/bitbucket.png"
                                                            alt="bitbucket"
                                                        />
                                                        <span>Bitbucket</span>
                                                    </a>
                                                </div>
                                                <div className="col">
                                                    <a className="dropdown-icon-item" href="#">
                                                        <img
                                                            src="assets/images/brands/dropbox.png"
                                                            alt="dropbox"
                                                        />
                                                        <span>Dropbox</span>
                                                    </a>
                                                </div>
                                                <div className="col">
                                                    <a className="dropdown-icon-item" href="#">
                                                        <img
                                                            src="assets/images/brands/g-suite.png"
                                                            alt="G Suite"
                                                        />
                                                        <span>G Suite</span>
                                                    </a>
                                                </div>
                                            </div>{" "}
                                            {/* end row*/}
                                        </div>
                                    </div>
                                </li>

                                <li className="notification-list">
                                    <a
                                        className="nav-link end-bar-toggle"
                                        href="javascript: void(0);"
                                    >
                                        <i className="dripicons-gear noti-icon" />
                                    </a>
                                </li>
                                <li className="dropdown notification-list">
                                    <a
                                        className="nav-link dropdown-toggle nav-user arrow-none me-0"
                                        data-bs-toggle="dropdown"
                                        href="#"
                                        role="button"
                                        aria-haspopup="false"
                                        aria-expanded="false"
                                    >
                                        <span className="account-user-avatar">
                                            <FontAwesomeIcon className="rounded-circle" icon={faUser} />
                                        </span>

                                        <span>
                                            <span className="account-user-name">{user.name}</span>
                                            <span className="account-position">{( !user.isAdmin)?"User":"Admin"}</span>
                                        </span>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu profile-dropdown">
                                        {/* item*/}
                                        <div className=" dropdown-header noti-title">
                                            <h6 className="text-overflow m-0">Welcome !</h6>
                                        </div>
                                        {/* item*/}
                                        <a
                                            href="javascript:void(0);"
                                            className="dropdown-item notify-item"
                                        >
                                            <i className="mdi mdi-account-circle me-1" />
                                            <span>My Account</span>
                                        </a>
                                        {/* item*/}
                                        <a
                                            href="javascript:void(0);"
                                            className="dropdown-item notify-item"
                                        >
                                            <i className="mdi mdi-account-edit me-1" />
                                            <span>Settings</span>
                                        </a>
                                        {/* item*/}
                                        <a
                                            href="javascript:void(0);"
                                            className="dropdown-item notify-item"
                                        >
                                            <i className="mdi mdi-lifebuoy me-1" />
                                            <span>Support</span>
                                        </a>
                                        {/* item*/}
                                        <a
                                            href="javascript:void(0);"
                                            className="dropdown-item notify-item"
                                        >
                                            <i className="mdi mdi-lock-outline me-1" />
                                            <span>Lock Screen</span>
                                        </a>
                                        {/* item*/}
                                        <a
                                            href="javascript:void(0);"
                                            className="dropdown-item notify-item"
                                        >
                                            <i className="mdi mdi-logout me-1" />
                                            <span>Logout</span>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                            <button className="button-menu-mobile open-left">
                                <i className="mdi mdi-menu" />
                            </button>
                            <div className="app-search dropdown d-none d-lg-block">
                                <form>
                                    <div className="input-group">
                                        <input
                                            type="text"
                                            className="form-control dropdown-toggle"
                                            placeholder="Search..."
                                            id="top-search"
                                        />
                                        <span className="mdi mdi-magnify search-icon" />
                                        <button className="input-group-text btn-primary" type="submit">
                                            Search
                                        </button>
                                    </div>
                                </form>
                                <div
                                    className="dropdown-menu dropdown-menu-animated dropdown-lg"
                                    id="search-dropdown"
                                >
                                    {/* item*/}
                                    <div className="dropdown-header noti-title">
                                        <h5 className="text-overflow mb-2">
                                            Found <span className="text-danger">17</span> results
                                        </h5>
                                    </div>
                                    {/* item*/}
                                    <a
                                        href="javascript:void(0);"
                                        className="dropdown-item notify-item"
                                    >
                                        <i className="uil-notes font-16 me-1" />
                                        <span>Analytics Report</span>
                                    </a>
                                    {/* item*/}
                                    <a
                                        href="javascript:void(0);"
                                        className="dropdown-item notify-item"
                                    >
                                        <i className="uil-life-ring font-16 me-1" />
                                        <span>How can I help you?</span>
                                    </a>
                                    {/* item*/}
                                    <a
                                        href="javascript:void(0);"
                                        className="dropdown-item notify-item"
                                    >
                                        <i className="uil-cog font-16 me-1" />
                                        <span>User profile settings</span>
                                    </a>
                                    {/* item*/}
                                    <div className="dropdown-header noti-title">
                                        <h6 className="text-overflow mb-2 text-uppercase">Users</h6>
                                    </div>
                                    <div className="notification-list">
                                        {/* item*/}
                                        <a
                                            href="javascript:void(0);"
                                            className="dropdown-item notify-item"
                                        >
                                            <div className="d-flex">
                                                <img
                                                    className="d-flex me-2 rounded-circle"
                                                    src="assets/images/users/avatar-2.jpg"
                                                    alt="Generic placeholder image"
                                                    height={32}
                                                />
                                                <div className="w-100">
                                                    <h5 className="m-0 font-14">Erwin Brown</h5>
                                                    <span className="font-12 mb-0">UI Designer</span>
                                                </div>
                                            </div>
                                        </a>
                                        {/* item*/}
                                        <a
                                            href="javascript:void(0);"
                                            className="dropdown-item notify-item"
                                        >
                                            <div className="d-flex">
                                                <img
                                                    className="d-flex me-2 rounded-circle"
                                                    src="assets/images/users/avatar-5.jpg"
                                                    alt="Generic placeholder image"
                                                    height={32}
                                                />
                                                <div className="w-100">
                                                    <h5 className="m-0 font-14">Jacob Deo</h5>
                                                    <span className="font-12 mb-0">Developer</span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end Topbar */}
                        {/* Start Content*/}
                        <div className="container-fluid">
                            {/* start page title */}
                            <div className="row">
                                <div className="col-12">
                                    <div className="page-title-box">
                                        <div className="page-title-right">
                                            <ol className="breadcrumb m-0">
                                                <li className="breadcrumb-item">
                                                    <a href="javascript: void(0);">Hyper</a>
                                                </li>
                                                <li className="breadcrumb-item">
                                                    <a href="javascript: void(0);">Apps</a>
                                                </li>
                                                <li className="breadcrumb-item active">Calendar</li>
                                            </ol>
                                        </div>
                                        <h4 className="page-title">Calendar</h4>
                                    </div>
                                </div>
                            </div>
                            {/* end page title */}
                            <div className="row">
                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <div className="d-grid">
                                                        <button
                                                            className="btn btn-lg font-16 btn-danger"
                                                            id="btn-new-event"
                                                        >
                                                            <i className="mdi mdi-plus-circle-outline" /> Create
                                                            New Event
                                                        </button>
                                                    </div>
                                                    <div id="external-events" className="m-t-20">
                                                        <br />
                                                        <p className="text-muted">
                                                            Drag and drop your event or click in the calendar
                                                        </p>
                                                        <div
                                                            className="external-event bg-success-lighten text-success"
                                                            data-class="bg-success"
                                                        >
                                                            <i className="mdi mdi-checkbox-blank-circle me-2 vertical-middle" />
                                                            New Theme Release
                                                        </div>
                                                        <div
                                                            className="external-event bg-info-lighten text-info"
                                                            data-class="bg-info"
                                                        >
                                                            <i className="mdi mdi-checkbox-blank-circle me-2 vertical-middle" />
                                                            My Event
                                                        </div>
                                                        <div
                                                            className="external-event bg-warning-lighten text-warning"
                                                            data-class="bg-warning"
                                                        >
                                                            <i className="mdi mdi-checkbox-blank-circle me-2 vertical-middle" />
                                                            Meet manager
                                                        </div>
                                                        <div
                                                            className="external-event bg-danger-lighten text-danger"
                                                            data-class="bg-danger"
                                                        >
                                                            <i className="mdi mdi-checkbox-blank-circle me-2 vertical-middle" />
                                                            Create New theme
                                                        </div>
                                                    </div>
                                                    <div className="mt-5 d-none d-xl-block">
                                                        <h5 className="text-center">How It Works ?</h5>
                                                        <ul className="ps-3">
                                                            <li className="text-muted mb-3">
                                                                It has survived not only five centuries, but also
                                                                the leap into electronic typesetting, remaining
                                                                essentially unchanged.
                                                            </li>
                                                            <li className="text-muted mb-3">
                                                                Richard McClintock, a Latin professor at
                                                                Hampden-Sydney College in Virginia, looked up one of
                                                                the more obscure Latin words, consectetur, from a
                                                                Lorem Ipsum passage.
                                                            </li>
                                                            <li className="text-muted mb-3">
                                                                It has survived not only five centuries, but also
                                                                the leap into electronic typesetting, remaining
                                                                essentially unchanged.
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>{" "}
                                                {/* end col*/}
                                                <div className="col-lg-9">
                                                    <div className="mt-4 mt-lg-0">
                                                        <div id="calendar" />
                                                    </div>
                                                </div>{" "}
                                                {/* end col */}
                                            </div>{" "}
                                            {/* end row */}
                                        </div>{" "}
                                        {/* end card body*/}
                                    </div>{" "}
                                    {/* end card */}
                                    {/* Add New Event MODAL */}
                                    <div className="modal fade" id="event-modal" tabIndex={-1}>
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <form
                                                    className="needs-validation"
                                                    name="event-form"
                                                    id="form-event"
                                                    noValidate=""
                                                >
                                                    <div className="modal-header py-3 px-4 border-bottom-0">
                                                        <h5 className="modal-title" id="modal-title">
                                                            Event
                                                        </h5>
                                                        <button
                                                            type="button"
                                                            className="btn-close"
                                                            data-bs-dismiss="modal"
                                                            aria-label="Close"
                                                        />
                                                    </div>
                                                    <div className="modal-body px-4 pb-4 pt-0">
                                                        <div className="row">
                                                            <div className="col-12">
                                                                <div className="mb-3">
                                                                    <label className="control-label form-label">
                                                                        Event Name
                                                                    </label>
                                                                    <input
                                                                        className="form-control"
                                                                        placeholder="Insert Event Name"
                                                                        type="text"
                                                                        name="title"
                                                                        id="event-title"
                                                                        required=""
                                                                    />
                                                                    <div className="invalid-feedback">
                                                                        Please provide a valid event name
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-12">
                                                                <div className="mb-3">
                                                                    <label className="control-label form-label">
                                                                        Category
                                                                    </label>
                                                                    <select
                                                                        className="form-select"
                                                                        name="category"
                                                                        id="event-category"
                                                                        required=""
                                                                    >
                                                                        <option value="bg-danger" selected="">
                                                                            Danger
                                                                        </option>
                                                                        <option value="bg-success">Success</option>
                                                                        <option value="bg-primary">Primary</option>
                                                                        <option value="bg-info">Info</option>
                                                                        <option value="bg-dark">Dark</option>
                                                                        <option value="bg-warning">Warning</option>
                                                                    </select>
                                                                    <div className="invalid-feedback">
                                                                        Please select a valid event category
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-danger"
                                                                    id="btn-delete-event"
                                                                >
                                                                    Delete
                                                                </button>
                                                            </div>
                                                            <div className="col-6 text-end">
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-light me-1"
                                                                    data-bs-dismiss="modal"
                                                                >
                                                                    Close
                                                                </button>
                                                                <button
                                                                    type="submit"
                                                                    className="btn btn-success"
                                                                    id="btn-save-event"
                                                                >
                                                                    Save
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>{" "}
                                            {/* end modal-content*/}
                                        </div>{" "}
                                        {/* end modal dialog*/}
                                    </div>
                                    {/* end modal*/}
                                </div>
                                {/* end col-12 */}
                            </div>{" "}
                            {/* end row */}
                        </div>{" "}
                        {/* container */}
                    </div>{" "}
                    {/* content */}
                    {/* Footer Start */}
                    <footer className="footer">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6">© Hyper - Coderthemes.com</div>
                                <div className="col-md-6">
                                    <div className="text-md-end footer-links d-none d-md-block">
                                        <a href="javascript: void(0);">About</a>
                                        <a href="javascript: void(0);">Support</a>
                                        <a href="javascript: void(0);">Contact Us</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                    {/* end Footer */}
                </div>
                {/* ============================================================== */}
                {/* End Page content */}
                {/* ============================================================== */}
            </div>



        </div>
    )
}

export default Index; 