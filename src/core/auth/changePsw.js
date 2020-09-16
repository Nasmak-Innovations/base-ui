import React, { Component } from 'react';


class ChangePSW extends Component {
    render() {
        return (
            <div>
                <div className="app">

                    <div className="mobile-menu md:hidden">
                        <div className="mobile-menu-bar">
                            <a href="" className="flex mr-auto">
                                <img alt="Midone Tailwind HTML Admin Template" className="w-6" src="dist/images/logo.svg"></img>
                            </a>
                            <a href="javascript:;" id="mobile-menu-toggler"> <i data-feather="bar-chart-2" className="w-8 h-8 text-white transform -rotate-90"></i> </a>
                        </div>
                        <ul className="border-t border-theme-24 py-5 hidden">
                            <li>
                                <a href="index.html" className="menu">
                                    <div className="menu__icon"> <i data-feather="home"></i> </div>
                                    <div className="menu__title"> Dashboard </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;" className="menu">
                                    <div className="menu__icon"> <i data-feather="box"></i> </div>
                                    <div className="menu__title"> Menu Layout <i data-feather="chevron-down" className="menu__sub-icon"></i> </div>
                                </a>
                                <ul className="">
                                    <li>
                                        <a href="index.html" className="menu">
                                            <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="menu__title"> Side Menu </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="simple-menu-dashboard.html" className="menu">
                                            <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="menu__title"> Simple Menu </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="top-menu-dashboard.html" className="menu">
                                            <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="menu__title"> Top Menu </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="side-menu-inbox.html" className="menu">
                                    <div className="menu__icon"> <i data-feather="inbox"></i> </div>
                                    <div className="menu__title"> Inbox </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-file-manager.html" className="menu">
                                    <div className="menu__icon"> <i data-feather="hard-drive"></i> </div>
                                    <div className="menu__title"> File Manager </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-point-of-sale.html" className="menu">
                                    <div className="menu__icon"> <i data-feather="credit-card"></i> </div>
                                    <div className="menu__title"> Point of Sale </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-chat.html" className="menu">
                                    <div className="menu__icon"> <i data-feather="message-square"></i> </div>
                                    <div className="menu__title"> Chat </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-post.html" className="menu">
                                    <div className="menu__icon"> <i data-feather="file-text"></i> </div>
                                    <div className="menu__title"> Post </div>
                                </a>
                            </li>
                            <li className="menu__devider my-6"></li>
                            <li>
                                <a href="javascript:;" className="menu">
                                    <div className="menu__icon"> <i data-feather="edit"></i> </div>
                                    <div className="menu__title"> Crud <i data-feather="chevron-down" className="menu__sub-icon"></i> </div>
                                </a>
                                <ul className="">
                                    <li>
                                        <a href="side-menu-crud-data-list.html" className="menu">
                                            <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="menu__title"> Data List </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-crud-form.html" className="menu">
                                            <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="menu__title"> Form </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:;" className="menu">
                                    <div className="menu__icon"> <i data-feather="users"></i> </div>
                                    <div className="menu__title"> Users <i data-feather="chevron-down" className="menu__sub-icon"></i> </div>
                                </a>
                                <ul className="">
                                    <li>
                                        <a href="side-menu-users-layout-1.html" className="menu">
                                            <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="menu__title"> Layout 1 </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-users-layout-2.html" className="menu">
                                            <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="menu__title"> Layout 2 </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-users-layout-3.html" className="menu">
                                            <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="menu__title"> Layout 3 </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:;" className="menu">
                                    <div className="menu__icon"> <i data-feather="trello"></i> </div>
                                    <div className="menu__title"> Profile <i data-feather="chevron-down" className="menu__sub-icon"></i> </div>
                                </a>
                                <ul className="">
                                    <li>
                                        <a href="side-menu-profile-overview-1.html" className="menu">
                                            <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="menu__title"> Overview 1 </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-profile-overview-2.html" className="menu">
                                            <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="menu__title"> Overview 2 </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-profile-overview-3.html" className="menu">
                                            <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="menu__title"> Overview 3 </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:;.html" className="menu menu--active">
                                    <div className="menu__icon"> <i data-feather="layout"></i> </div>
                                    <div className="menu__title"> Pages <i data-feather="chevron-down" className="menu__sub-icon"></i> </div>
                                </a>
                                <ul className="menu__sub-open">
                                    <li>
                                        <a href="javascript:;" className="menu">
                                            <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="menu__title"> Wizards <i data-feather="chevron-down" className="menu__sub-icon"></i> </div>
                                        </a>
                                        <ul className="">
                                            <li>
                                                <a href="side-menu-wizard-layout-1.html" className="menu">
                                                    <div className="menu__icon"> <i data-feather="zap"></i> </div>
                                                    <div className="menu__title">Layout 1</div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="side-menu-wizard-layout-2.html" className="menu">
                                                    <div className="menu__icon"> <i data-feather="zap"></i> </div>
                                                    <div className="menu__title">Layout 2</div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="side-menu-wizard-layout-3.html" className="menu">
                                                    <div className="menu__icon"> <i data-feather="zap"></i> </div>
                                                    <div className="menu__title">Layout 3</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="javascript:;" className="menu">
                                            <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="menu__title"> Blog <i data-feather="chevron-down" className="menu__sub-icon"></i> </div>
                                        </a>
                                        <ul className="">
                                            <li>
                                                <a href="side-menu-blog-layout-1.html" className="menu">
                                                    <div className="menu__icon"> <i data-feather="zap"></i> </div>
                                                    <div className="menu__title">Layout 1</div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="side-menu-blog-layout-2.html" className="menu">
                                                    <div className="menu__icon"> <i data-feather="zap"></i> </div>
                                                    <div className="menu__title">Layout 2</div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="side-menu-blog-layout-3.html" className="menu">
                                                    <div className="menu__icon"> <i data-feather="zap"></i> </div>
                                                    <div className="menu__title">Layout 3</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="javascript:;" className="menu">
                                            <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="menu__title"> Pricing <i data-feather="chevron-down" className="menu__sub-icon"></i> </div>
                                        </a>
                                        <ul className="">
                                            <li>
                                                <a href="side-menu-pricing-layout-1.html" className="menu">
                                                    <div className="menu__icon"> <i data-feather="zap"></i> </div>
                                                    <div className="menu__title">Layout 1</div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="side-menu-pricing-layout-2.html" className="menu">
                                                    <div className="menu__icon"> <i data-feather="zap"></i> </div>
                                                    <div className="menu__title">Layout 2</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="javascript:;" className="menu">
                                            <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="menu__title"> Invoice <i data-feather="chevron-down" className="menu__sub-icon"></i> </div>
                                        </a>
                                        <ul className="">
                                            <li>
                                                <a href="side-menu-invoice-layout-1.html" className="menu">
                                                    <div className="menu__icon"> <i data-feather="zap"></i> </div>
                                                    <div className="menu__title">Layout 1</div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="side-menu-invoice-layout-2.html" className="menu">
                                                    <div className="menu__icon"> <i data-feather="zap"></i> </div>
                                                    <div className="menu__title">Layout 2</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="javascript:;" className="menu">
                                            <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="menu__title"> FAQ <i data-feather="chevron-down" className="menu__sub-icon"></i> </div>
                                        </a>
                                        <ul className="">
                                            <li>
                                                <a href="side-menu-faq-layout-1.html" className="menu">
                                                    <div className="menu__icon"> <i data-feather="zap"></i> </div>
                                                    <div className="menu__title">Layout 1</div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="side-menu-faq-layout-2.html" className="menu">
                                                    <div className="menu__icon"> <i data-feather="zap"></i> </div>
                                                    <div className="menu__title">Layout 2</div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="side-menu-faq-layout-3.html" className="menu">
                                                    <div className="menu__icon"> <i data-feather="zap"></i> </div>
                                                    <div className="menu__title">Layout 3</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="login-login.html" className="menu">
                                            <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="menu__title"> Login </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="login-register.html" className="menu">
                                            <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="menu__title"> Register </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="main-error-page.html" className="menu">
                                            <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="menu__title"> Error Page </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-update-profile.html" className="menu">
                                            <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="menu__title"> Update profile </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-change-password.html" className="menu menu--active">
                                            <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="menu__title"> Change Password </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu__devider my-6"></li>
                            <li>
                                <a href="javascript:;" className="menu">
                                    <div className="menu__icon"> <i data-feather="inbox"></i> </div>
                                    <div className="menu__title"> Components <i data-feather="chevron-down" className="menu__sub-icon"></i> </div>
                                </a>
                                <ul className="">
                                    <li>
                                        <a href="javascript:;" className="menu">
                                            <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="menu__title"> Grid <i data-feather="chevron-down" className="menu__sub-icon"></i> </div>
                                        </a>
                                        <ul className="">
                                            <li>
                                                <a href="side-menu-regular-table.html" className="menu">
                                                    <div className="menu__icon"> <i data-feather="zap"></i> </div>
                                                    <div className="menu__title">Regular Table</div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="side-menu-datatable.html" className="menu">
                                                    <div className="menu__icon"> <i data-feather="zap"></i> </div>
                                                    <div className="menu__title">Datatable</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="side-menu-accordion.html" className="menu">
                                            <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="menu__title"> Accordion </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-button.html" className="menu">
                                            <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="menu__title"> Button </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-modal.html" className="menu">
                                            <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="menu__title"> Modal </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-alert.html" className="menu">
                                            <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="menu__title"> Alert </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-progress-bar.html" className="menu">
                                            <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="menu__title"> Progress Bar </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-tooltip.html" className="menu">
                                            <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="menu__title"> Tooltip </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-dropdown.html" className="menu">
                                            <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="menu__title"> Dropdown </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-toast.html" className="menu">
                                            <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="menu__title"> Toast </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-typography.html" className="menu">
                                            <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="menu__title"> Typography </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-icon.html" className="menu">
                                            <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="menu__title"> Icon </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-loading-icon.html" className="menu">
                                            <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="menu__title"> Loading Icon </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:;" className="menu">
                                    <div className="menu__icon"> <i data-feather="sidebar"></i> </div>
                                    <div className="menu__title"> Forms <i data-feather="chevron-down" className="menu__sub-icon"></i> </div>
                                </a>
                                <ul className="">
                                    <li>
                                        <a href="side-menu-regular-form.html" className="menu">
                                            <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="menu__title"> Regular Form </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-datepicker.html" className="menu">
                                            <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="menu__title"> Datepicker </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-select2.html" className="menu">
                                            <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="menu__title"> Select2 </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-file-upload.html" className="menu">
                                            <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="menu__title"> File Upload </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-wysiwyg-editor.html" className="menu">
                                            <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="menu__title"> Wysiwyg Editor </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-validation.html" className="menu">
                                            <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="menu__title"> Validation </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:;" className="menu">
                                    <div className="menu__icon"> <i data-feather="hard-drive"></i> </div>
                                    <div className="menu__title"> Widgets <i data-feather="chevron-down" className="menu__sub-icon"></i> </div>
                                </a>
                                <ul className="">
                                    <li>
                                        <a href="side-menu-chart.html" className="menu">
                                            <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="menu__title"> Chart </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-slider.html" className="menu">
                                            <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="menu__title"> Slider </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-image-zoom.html" className="menu">
                                            <div className="menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="menu__title"> Image Zoom </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="border-b border-theme-24 -mt-10 md:-mt-5 -mx-3 sm:-mx-8 px-3 sm:px-8 pt-3 md:pt-0 mb-10">
                        <div className="top-bar-boxed flex items-center">

                            <a href="" className="-intro-x hidden md:flex">
                                <img alt="Midone Tailwind HTML Admin Template" className="w-6" src="dist/images/logo.svg"></img>
                                <span className="text-white text-lg ml-3"> Mid<span className="font-medium">one</span> </span>
                            </a>
                            <div className="-intro-x breadcrumb breadcrumb--light mr-auto"> <a href="" className="">Application</a> <i data-feather="chevron-right" className="breadcrumb__icon"></i> <a href="" className="breadcrumb--active">Dashboard</a> </div>

                            <div className="intro-x relative mr-3 sm:mr-6">
                                <div className="search hidden sm:block">
                                    <input type="text" className="search__input input placeholder-theme-13" placeholder="Search..."></input>
                                    <i data-feather="search" className="search__icon"></i>
                                </div>
                                <a className="notification notification--light sm:hidden" href=""> <i data-feather="search" className="notification__icon"></i> </a>
                                <div className="search-result">
                                    <div className="search-result__content">
                                        <div className="search-result__content__title">Pages</div>
                                        <div className="mb-5">
                                            <a href="" className="flex items-center">
                                                <div className="w-8 h-8 bg-theme-18 text-theme-9 flex items-center justify-center rounded-full"> <i className="w-4 h-4" data-feather="inbox"></i> </div>
                                                <div className="ml-3">Mail Settings</div>
                                            </a>
                                            <a href="" className="flex items-center mt-2">
                                                <div className="w-8 h-8 bg-theme-17 text-theme-11 flex items-center justify-center rounded-full"> <i className="w-4 h-4" data-feather="users"></i> </div>
                                                <div className="ml-3">Users Admin Permissions</div>
                                            </a>
                                            <a href="" className="flex items-center mt-2">
                                                <div className="w-8 h-8 bg-theme-14 text-theme-10 flex items-center justify-center rounded-full"> <i className="w-4 h-4" data-feather="credit-card"></i> </div>
                                                <div className="ml-3">Transactions Report</div>
                                            </a>
                                        </div>
                                        <div className="search-result__content__title">Users</div>
                                        <div className="mb-5">
                                            <a href="" className="flex items-center mt-2">
                                                <div className="w-8 h-8 image-fit">
                                                    <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-15.jpg"></img>
                                                </div>
                                                <div className="ml-3">Robert De Niro</div>
                                                <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">robertdeniro@left4code.com</div>
                                            </a>
                                            <a href="" className="flex items-center mt-2">
                                                <div className="w-8 h-8 image-fit">
                                                    <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-7.jpg"></img>
                                                </div>
                                                <div className="ml-3">Robert De Niro</div>
                                                <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">robertdeniro@left4code.com</div>
                                            </a>
                                            <a href="" className="flex items-center mt-2">
                                                <div className="w-8 h-8 image-fit">
                                                    <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-12.jpg"></img>
                                                </div>
                                                <div className="ml-3">Al Pacino</div>
                                                <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">alpacino@left4code.com</div>
                                            </a>
                                            <a href="" className="flex items-center mt-2">
                                                <div className="w-8 h-8 image-fit">
                                                    <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-7.jpg"></img>
                                                </div>
                                                <div className="ml-3">Denzel Washington</div>
                                                <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">denzelwashington@left4code.com</div>
                                            </a>
                                        </div>
                                        <div className="search-result__content__title">Products</div>
                                        <a href="" className="flex items-center mt-2">
                                            <div className="w-8 h-8 image-fit">
                                                <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/preview-4.jpg"></img>
                                            </div>
                                            <div className="ml-3">Nikon Z6</div>
                                            <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">Photography</div>
                                        </a>
                                        <a href="" className="flex items-center mt-2">
                                            <div className="w-8 h-8 image-fit">
                                                <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/preview-15.jpg"></img>
                                            </div>
                                            <div className="ml-3">Dell XPS 13</div>
                                            <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">PC &amp; Laptop</div>
                                        </a>
                                        <a href="" className="flex items-center mt-2">
                                            <div className="w-8 h-8 image-fit">
                                                <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/preview-10.jpg"></img>
                                            </div>
                                            <div className="ml-3">Apple MacBook Pro 13</div>
                                            <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">PC &amp; Laptop</div>
                                        </a>
                                        <a href="" className="flex items-center mt-2">
                                            <div className="w-8 h-8 image-fit">
                                                <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/preview-8.jpg"></img>
                                            </div>
                                            <div className="ml-3">Samsung Q90 QLED TV</div>
                                            <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">Electronic</div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="intro-x dropdown relative mr-4 sm:mr-6">
                                <div className="dropdown-toggle notification notification--light notification--bullet cursor-pointer"> <i data-feather="bell" className="notification__icon"></i> </div>
                                <div className="notification-content dropdown-box mt-8 absolute top-0 right-0 z-10 -mr-10 sm:mr-0">
                                    <div className="notification-content__box dropdown-box__content box">
                                        <div className="notification-content__title">Notifications</div>
                                        <div className="cursor-pointer relative flex items-center ">
                                            <div className="w-12 h-12 flex-none image-fit mr-1">
                                                <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-15.jpg"></img>
                                                <div className="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                                            </div>
                                            <div className="ml-2 overflow-hidden">
                                                <div className="flex items-center">
                                                    <a href="javascript:;" className="font-medium truncate mr-5">Robert De Niro</a>
                                                    <div className="text-xs text-gray-500 ml-auto whitespace-no-wrap">01:10 PM</div>
                                                </div>
                                                <div className="w-full truncate text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#039;s standard dummy text ever since the 1500</div>
                                            </div>
                                        </div>
                                        <div className="cursor-pointer relative flex items-center mt-5">
                                            <div className="w-12 h-12 flex-none image-fit mr-1">
                                                <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-7.jpg"></img>
                                                <div className="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                                            </div>
                                            <div className="ml-2 overflow-hidden">
                                                <div className="flex items-center">
                                                    <a href="javascript:;" className="font-medium truncate mr-5">Robert De Niro</a>
                                                    <div className="text-xs text-gray-500 ml-auto whitespace-no-wrap">01:10 PM</div>
                                                </div>
                                                <div className="w-full truncate text-gray-600">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 20</div>
                                            </div>
                                        </div>
                                        <div className="cursor-pointer relative flex items-center mt-5">
                                            <div className="w-12 h-12 flex-none image-fit mr-1">
                                                <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-12.jpg"></img>
                                                <div className="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                                            </div>
                                            <div className="ml-2 overflow-hidden">
                                                <div className="flex items-center">
                                                    <a href="javascript:;" className="font-medium truncate mr-5">Al Pacino</a>
                                                    <div className="text-xs text-gray-500 ml-auto whitespace-no-wrap">05:09 AM</div>
                                                </div>
                                                <div className="w-full truncate text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#039;s standard dummy text ever since the 1500</div>
                                            </div>
                                        </div>
                                        <div className="cursor-pointer relative flex items-center mt-5">
                                            <div className="w-12 h-12 flex-none image-fit mr-1">
                                                <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-7.jpg"></img>
                                                <div className="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                                            </div>
                                            <div className="ml-2 overflow-hidden">
                                                <div className="flex items-center">
                                                    <a href="javascript:;" className="font-medium truncate mr-5">Denzel Washington</a>
                                                    <div className="text-xs text-gray-500 ml-auto whitespace-no-wrap">06:05 AM</div>
                                                </div>
                                                <div className="w-full truncate text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem </div>
                                            </div>
                                        </div>
                                        <div className="cursor-pointer relative flex items-center mt-5">
                                            <div className="w-12 h-12 flex-none image-fit mr-1">
                                                <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-13.jpg"></img>
                                                <div className="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                                            </div>
                                            <div className="ml-2 overflow-hidden">
                                                <div className="flex items-center">
                                                    <a href="javascript:;" className="font-medium truncate mr-5">Denzel Washington</a>
                                                    <div className="text-xs text-gray-500 ml-auto whitespace-no-wrap">01:10 PM</div>
                                                </div>
                                                <div className="w-full truncate text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#039;s standard dummy text ever since the 1500</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="intro-x dropdown w-8 h-8 relative">
                                <div className="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in scale-110">
                                    <img alt="Midone Tailwind HTML Admin Template" src="dist/images/profile-7.jpg"></img>
                                </div>
                                <div className="dropdown-box mt-10 absolute w-56 top-0 right-0 z-20">
                                    <div className="dropdown-box__content box bg-theme-38 text-white">
                                        <div className="p-4 border-b border-theme-40">
                                            <div className="font-medium">Robert De Niro</div>
                                            <div className="text-xs text-theme-41">DevOps Engineer</div>
                                        </div>
                                        <div className="p-2">
                                            <a href="" className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 rounded-md"> <i data-feather="user" className="w-4 h-4 mr-2"></i> Profile </a>
                                            <a href="" className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 rounded-md"> <i data-feather="edit" className="w-4 h-4 mr-2"></i> Add Account </a>
                                            <a href="" className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 rounded-md"> <i data-feather="lock" className="w-4 h-4 mr-2"></i> Reset Password </a>
                                            <a href="" className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 rounded-md"> <i data-feather="help-circle" className="w-4 h-4 mr-2"></i> Help </a>
                                        </div>
                                        <div className="p-2 border-t border-theme-40">
                                            <a href="" className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 rounded-md"> <i data-feather="toggle-right" className="w-4 h-4 mr-2"></i> Logout </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <nav className="top-nav">
                        <ul>
                            <li>
                                <a href="top-menu-dashboard.html" className="top-menu">
                                    <div className="top-menu__icon"> <i data-feather="home"></i> </div>
                                    <div className="top-menu__title"> Dashboard </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;" className="top-menu">
                                    <div className="top-menu__icon"> <i data-feather="box"></i> </div>
                                    <div className="top-menu__title"> Menu Layout <i data-feather="chevron-down" className="top-menu__sub-icon"></i> </div>
                                </a>
                                <ul className="">
                                    <li>
                                        <a href="index.html" className="top-menu">
                                            <div className="top-menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="top-menu__title"> Side Menu </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="simple-menu-dashboard.html" className="top-menu">
                                            <div className="top-menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="top-menu__title"> Simple Menu </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="top-menu-dashboard.html" className="top-menu">
                                            <div className="top-menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="top-menu__title"> Top Menu </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:;" className="top-menu">
                                    <div className="top-menu__icon"> <i data-feather="activity"></i> </div>
                                    <div className="top-menu__title"> Apps <i data-feather="chevron-down" className="top-menu__sub-icon"></i> </div>
                                </a>
                                <ul className="">
                                    <li>
                                        <a href="javascript:;" className="top-menu">
                                            <div className="top-menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="top-menu__title"> Users <i data-feather="chevron-down" className="top-menu__sub-icon"></i> </div>
                                        </a>
                                        <ul className="">
                                            <li>
                                                <a href="top-menu-users-layout-1.html" className="top-menu">
                                                    <div className="top-menu__icon"> <i data-feather="zap"></i> </div>
                                                    <div className="top-menu__title">Layout 1</div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="top-menu-users-layout-2.html" className="top-menu">
                                                    <div className="top-menu__icon"> <i data-feather="zap"></i> </div>
                                                    <div className="top-menu__title">Layout 2</div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="top-menu-users-layout-3.html" className="top-menu">
                                                    <div className="top-menu__icon"> <i data-feather="zap"></i> </div>
                                                    <div className="top-menu__title">Layout 3</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="javascript:;" className="top-menu">
                                            <div className="top-menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="top-menu__title"> Profile <i data-feather="chevron-down" className="top-menu__sub-icon"></i> </div>
                                        </a>
                                        <ul className="">
                                            <li>
                                                <a href="top-menu-profile-overview-1.html" className="top-menu">
                                                    <div className="top-menu__icon"> <i data-feather="zap"></i> </div>
                                                    <div className="top-menu__title">Overview 1</div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="top-menu-profile-overview-2.html" className="top-menu">
                                                    <div className="top-menu__icon"> <i data-feather="zap"></i> </div>
                                                    <div className="top-menu__title">Overview 2</div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="top-menu-profile-overview-3.html" className="top-menu">
                                                    <div className="top-menu__icon"> <i data-feather="zap"></i> </div>
                                                    <div className="top-menu__title">Overview 3</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="top-menu-inbox.html" className="top-menu">
                                            <div className="top-menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="top-menu__title"> Inbox </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="top-menu-file-manager.html" className="top-menu">
                                            <div className="top-menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="top-menu__title"> File Manager </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="top-menu-point-of-sale.html" className="top-menu">
                                            <div className="top-menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="top-menu__title"> Point of Sale </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="top-menu-chat.html" className="top-menu">
                                            <div className="top-menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="top-menu__title"> Chat </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="top-menu-post.html" className="top-menu">
                                            <div className="top-menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="top-menu__title"> Post </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:;" className="top-menu">
                                            <div className="top-menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="top-menu__title"> Crud <i data-feather="chevron-down" className="top-menu__sub-icon"></i> </div>
                                        </a>
                                        <ul className="">
                                            <li>
                                                <a href="side-menu-crud-data-list.html" className="top-menu">
                                                    <div className="top-menu__icon"> <i data-feather="zap"></i> </div>
                                                    <div className="top-menu__title">Data List</div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="side-menu-crud-form.html" className="top-menu">
                                                    <div className="top-menu__icon"> <i data-feather="zap"></i> </div>
                                                    <div className="top-menu__title">Form</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:;.html" className="top-menu top-menu--active">
                                    <div className="top-menu__icon"> <i data-feather="layout"></i> </div>
                                    <div className="top-menu__title"> Pages <i data-feather="chevron-down" className="top-menu__sub-icon"></i> </div>
                                </a>
                                <ul className="top-menu__sub-open">
                                    <li>
                                        <a href="javascript:;" className="top-menu">
                                            <div className="top-menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="top-menu__title"> Wizards <i data-feather="chevron-down" className="top-menu__sub-icon"></i> </div>
                                        </a>
                                        <ul className="">
                                            <li>
                                                <a href="top-menu-wizard-layout-1.html" className="top-menu">
                                                    <div className="top-menu__icon"> <i data-feather="zap"></i> </div>
                                                    <div className="top-menu__title">Layout 1</div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="top-menu-wizard-layout-2.html" className="top-menu">
                                                    <div className="top-menu__icon"> <i data-feather="zap"></i> </div>
                                                    <div className="top-menu__title">Layout 2</div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="top-menu-wizard-layout-3.html" className="top-menu">
                                                    <div className="top-menu__icon"> <i data-feather="zap"></i> </div>
                                                    <div className="top-menu__title">Layout 3</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="javascript:;" className="top-menu">
                                            <div className="top-menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="top-menu__title"> Blog <i data-feather="chevron-down" className="top-menu__sub-icon"></i> </div>
                                        </a>
                                        <ul className="">
                                            <li>
                                                <a href="top-menu-blog-layout-1.html" className="top-menu">
                                                    <div className="top-menu__icon"> <i data-feather="zap"></i> </div>
                                                    <div className="top-menu__title">Layout 1</div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="top-menu-blog-layout-2.html" className="top-menu">
                                                    <div className="top-menu__icon"> <i data-feather="zap"></i> </div>
                                                    <div className="top-menu__title">Layout 2</div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="top-menu-blog-layout-3.html" className="top-menu">
                                                    <div className="top-menu__icon"> <i data-feather="zap"></i> </div>
                                                    <div className="top-menu__title">Layout 3</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="javascript:;" className="top-menu">
                                            <div className="top-menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="top-menu__title"> Pricing <i data-feather="chevron-down" className="top-menu__sub-icon"></i> </div>
                                        </a>
                                        <ul className="">
                                            <li>
                                                <a href="top-menu-pricing-layout-1.html" className="top-menu">
                                                    <div className="top-menu__icon"> <i data-feather="zap"></i> </div>
                                                    <div className="top-menu__title">Layout 1</div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="top-menu-pricing-layout-2.html" className="top-menu">
                                                    <div className="top-menu__icon"> <i data-feather="zap"></i> </div>
                                                    <div className="top-menu__title">Layout 2</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="javascript:;" className="top-menu">
                                            <div className="top-menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="top-menu__title"> Invoice <i data-feather="chevron-down" className="top-menu__sub-icon"></i> </div>
                                        </a>
                                        <ul className="">
                                            <li>
                                                <a href="top-menu-invoice-layout-1.html" className="top-menu">
                                                    <div className="top-menu__icon"> <i data-feather="zap"></i> </div>
                                                    <div className="top-menu__title">Layout 1</div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="top-menu-invoice-layout-2.html" className="top-menu">
                                                    <div className="top-menu__icon"> <i data-feather="zap"></i> </div>
                                                    <div className="top-menu__title">Layout 2</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="javascript:;" className="top-menu">
                                            <div className="top-menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="top-menu__title"> FAQ <i data-feather="chevron-down" className="top-menu__sub-icon"></i> </div>
                                        </a>
                                        <ul className="">
                                            <li>
                                                <a href="top-menu-faq-layout-1.html" className="top-menu">
                                                    <div className="top-menu__icon"> <i data-feather="zap"></i> </div>
                                                    <div className="top-menu__title">Layout 1</div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="top-menu-faq-layout-2.html" className="top-menu">
                                                    <div className="top-menu__icon"> <i data-feather="zap"></i> </div>
                                                    <div className="top-menu__title">Layout 2</div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="top-menu-faq-layout-3.html" className="top-menu">
                                                    <div className="top-menu__icon"> <i data-feather="zap"></i> </div>
                                                    <div className="top-menu__title">Layout 3</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="login-login.html" className="top-menu">
                                            <div className="top-menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="top-menu__title"> Login </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="login-register.html" className="top-menu">
                                            <div className="top-menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="top-menu__title"> Register </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="main-error-page.html" className="top-menu">
                                            <div className="top-menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="top-menu__title"> Error Page </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="top-menu-update-profile.html" className="top-menu">
                                            <div className="top-menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="top-menu__title"> Update profile </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="top-menu-change-password.html" className="top-menu">
                                            <div className="top-menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="top-menu__title"> Change Password </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:;" className="top-menu">
                                    <div className="top-menu__icon"> <i data-feather="inbox"></i> </div>
                                    <div className="top-menu__title"> Components <i data-feather="chevron-down" className="top-menu__sub-icon"></i> </div>
                                </a>
                                <ul className="">
                                    <li>
                                        <a href="javascript:;" className="top-menu">
                                            <div className="top-menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="top-menu__title"> Grid <i data-feather="chevron-down" className="top-menu__sub-icon"></i> </div>
                                        </a>
                                        <ul className="">
                                            <li>
                                                <a href="top-menu-regular-table.html" className="top-menu">
                                                    <div className="top-menu__icon"> <i data-feather="zap"></i> </div>
                                                    <div className="top-menu__title">Regular Table</div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="top-menu-datatable.html" className="top-menu">
                                                    <div className="top-menu__icon"> <i data-feather="zap"></i> </div>
                                                    <div className="top-menu__title">Datatable</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="top-menu-accordion.html" className="top-menu">
                                            <div className="top-menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="top-menu__title"> Accordion </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="top-menu-button.html" className="top-menu">
                                            <div className="top-menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="top-menu__title"> Button </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="top-menu-modal.html" className="top-menu">
                                            <div className="top-menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="top-menu__title"> Modal </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="top-menu-alert.html" className="top-menu">
                                            <div className="top-menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="top-menu__title"> Alert </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="top-menu-progress-bar.html" className="top-menu">
                                            <div className="top-menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="top-menu__title"> Progress Bar </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="top-menu-tooltip.html" className="top-menu">
                                            <div className="top-menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="top-menu__title"> Tooltip </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="top-menu-dropdown.html" className="top-menu">
                                            <div className="top-menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="top-menu__title"> Dropdown </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="top-menu-toast.html" className="top-menu">
                                            <div className="top-menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="top-menu__title"> Toast </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="top-menu-typography.html" className="top-menu">
                                            <div className="top-menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="top-menu__title"> Typography </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="top-menu-icon.html" className="top-menu">
                                            <div className="top-menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="top-menu__title"> Icon </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-loading-icon.html" className="top-menu">
                                            <div className="top-menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="top-menu__title"> Loading Icon </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:;" className="top-menu">
                                    <div className="top-menu__icon"> <i data-feather="sidebar"></i> </div>
                                    <div className="top-menu__title"> Forms <i data-feather="chevron-down" className="top-menu__sub-icon"></i> </div>
                                </a>
                                <ul className="">
                                    <li>
                                        <a href="top-menu-regular-form.html" className="top-menu">
                                            <div className="top-menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="top-menu__title"> Regular Form </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="top-menu-datepicker.html" className="top-menu">
                                            <div className="top-menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="top-menu__title"> Datepicker </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="top-menu-select2.html" className="top-menu">
                                            <div className="top-menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="top-menu__title"> Select2 </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="top-menu-file-upload.html" className="top-menu">
                                            <div className="top-menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="top-menu__title"> File Upload </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="top-menu-wysiwyg-editor.html" className="top-menu">
                                            <div className="top-menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="top-menu__title"> Wysiwyg Editor </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="top-menu-validation.html" className="top-menu">
                                            <div className="top-menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="top-menu__title"> Validation </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:;" className="top-menu">
                                    <div className="top-menu__icon"> <i data-feather="hard-drive"></i> </div>
                                    <div className="top-menu__title"> Widgets <i data-feather="chevron-down" className="top-menu__sub-icon"></i> </div>
                                </a>
                                <ul className="">
                                    <li>
                                        <a href="top-menu-chart.html" className="top-menu">
                                            <div className="top-menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="top-menu__title"> Chart </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="top-menu-slider.html" className="top-menu">
                                            <div className="top-menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="top-menu__title"> Slider </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="top-menu-image-zoom.html" className="top-menu">
                                            <div className="top-menu__icon"> <i data-feather="activity"></i> </div>
                                            <div className="top-menu__title"> Image Zoom </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    <div className="content">
                        <div className="intro-y flex items-center mt-8">
                            <h2 className="text-lg font-medium mr-auto">
                                Update Profile
                                    </h2>
                        </div>
                        <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-12 lg:col-span-4 xxl:col-span-3 flex lg:block flex-col-reverse">
                                <div className="intro-y box mt-5">
                                    <div className="relative flex items-center p-5">
                                        <div className="w-12 h-12 image-fit">
                                            <img alt="Midone Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-2.jpg"></img>
                                        </div>
                                        <div className="ml-4 mr-auto">
                                            <div className="font-medium text-base">Al Pacino</div>
                                            <div className="text-gray-600">Frontend Engineer</div>
                                        </div>
                                        <div className="dropdown relative">
                                            <a className="dropdown-toggle w-5 h-5 block" href="javascript:;"> <i data-feather="more-horizontal" className="w-5 h-5 text-gray-700"></i> </a>
                                            <div className="dropdown-box mt-5 absolute w-56 top-0 right-0 z-20">
                                                <div className="dropdown-box__content box">
                                                    <div className="p-4 border-b border-gray-200 font-medium">Export Options</div>
                                                    <div className="p-2">
                                                        <a href="" className="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md"> <i data-feather="activity" className="w-4 h-4 text-gray-700 mr-2"></i> English </a>
                                                        <a href="" className="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md">
                                                            <i data-feather="box" className="w-4 h-4 text-gray-700 mr-2"></i> Indonesia
                                                                    <div className="text-xs text-white px-1 rounded-full bg-theme-6 ml-auto">10</div>
                                                        </a>
                                                        <a href="" className="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md"> <i data-feather="layout" className="w-4 h-4 text-gray-700 mr-2"></i> English </a>
                                                        <a href="" className="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md"> <i data-feather="sidebar" className="w-4 h-4 text-gray-700 mr-2"></i> Indonesia </a>
                                                    </div>
                                                    <div className="px-3 py-3 border-t border-gray-200 font-medium flex">
                                                        <button type="button" className="button button--sm bg-theme-1 text-white">Settings</button>
                                                        <button type="button" className="button button--sm bg-gray-200 text-gray-600 ml-auto">View Profile</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-5 border-t border-gray-200">
                                        <a className="flex items-center text-theme-1 font-medium" href=""> <i data-feather="activity" className="w-4 h-4 mr-2"></i> Personal Information </a>
                                        <a className="flex items-center mt-5" href=""> <i data-feather="box" className="w-4 h-4 mr-2"></i> Account Settings </a>
                                        <a className="flex items-center mt-5" href=""> <i data-feather="lock" className="w-4 h-4 mr-2"></i> Change Password </a>
                                        <a className="flex items-center mt-5" href=""> <i data-feather="settings" className="w-4 h-4 mr-2"></i> User Settings </a>
                                    </div>
                                    <div className="p-5 border-t border-gray-200">
                                        <a className="flex items-center" href=""> <i data-feather="activity" className="w-4 h-4 mr-2"></i> Email Settings </a>
                                        <a className="flex items-center mt-5" href=""> <i data-feather="box" className="w-4 h-4 mr-2"></i> Saved Credit Cards </a>
                                        <a className="flex items-center mt-5" href=""> <i data-feather="lock" className="w-4 h-4 mr-2"></i> Social Networks </a>
                                        <a className="flex items-center mt-5" href=""> <i data-feather="settings" className="w-4 h-4 mr-2"></i> Tax Information </a>
                                    </div>
                                    <div className="p-5 border-t flex">
                                        <button type="button" className="button button--sm block bg-theme-1 text-white">New Group</button>
                                        <button type="button" className="button button--sm border text-gray-700 ml-auto">New Quick Link</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 lg:col-span-8 xxl:col-span-9">
                                <div className="intro-y box lg:mt-5">
                                    <div className="flex items-center p-5 border-b border-gray-200">
                                        <h2 className="font-medium text-base mr-auto">
                                            Change Password
                                        </h2>
                                    </div>
                                    <div className="p-5">
                                        <div>
                                            <label>Old Password</label>
                                            <input type="password" className="input w-full border mt-2" placeholder="Input text"></input>
                                        </div>
                                        <div className="mt-3">
                                            <label>New Password</label>
                                            <input type="password" className="input w-full border mt-2" placeholder="Input text"></input>
                                        </div>
                                        <div className="mt-3">
                                            <label>Confirm New Password</label>
                                            <input type="password" className="input w-full border mt-2" placeholder="Input text"></input>
                                        </div>
                                        <button type="button" className="button bg-theme-1 text-white mt-4">Change Password</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <script src="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js"></script>
                    <script src="https://maps.googleapis.com/maps/api/js?key=[  your-google-map-api ]libraries=places "></script>
                    <script src="dist/js/app.js"></script>
                </div>
            </div >
        )
    }
}
export default ChangePSW