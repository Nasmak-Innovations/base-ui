import React, {PureComponent} from 'react';

class TopBar extends PureComponent {
	render() {
		return (
			<div className="top-bar">
				{/*BEGIN: Breadcrumb*/}
				<div className="-intro-x breadcrumb mr-auto hidden sm:flex">
					<a href="" className="">Application</a>
					<i
						data-feather="chevron-right" className="breadcrumb__icon"/>
					<a href=""
					   className="breadcrumb--active">Dashboard
					</a>
				</div>
				{/*END: Breadcrumb*/}
				{/*BEGIN: Search*/}
				{/*<div className="intro-x relative mr-3 sm:mr-6">*/}
				{/*	<div className="search hidden sm:block">*/}
				{/*		<input type="text" className="search__input input placeholder-theme-13"*/}
				{/*			   placeholder="Search..."/>*/}
				{/*		<i data-feather="search" className="search__icon"/>*/}
				{/*	</div>*/}
				{/*	<a className="notification sm:hidden" href="">*/}
				{/*		<i data-feather="search"*/}
				{/*		   className="notification__icon"/>*/}
				{/*	</a>*/}
				{/*	<div className="search-result">*/}
				{/*		<div className="search-result__content">*/}
				{/*			<div className="search-result__content__title">Pages</div>*/}
				{/*			<div className="mb-5">*/}
				{/*				<a href="" className="flex items-center">*/}
				{/*					<div*/}
				{/*						className="w-8 h-8 bg-theme-18 text-theme-9 flex items-center justify-center rounded-full">*/}
				{/*						<i className="w-4 h-4" data-feather="inbox" />*/}
				{/*					</div>*/}
				{/*					<div className="ml-3">Mail Settings</div>*/}
				{/*				</a>*/}
				{/*				<a href="" className="flex items-center mt-2">*/}
				{/*					<div*/}
				{/*						className="w-8 h-8 bg-theme-17 text-theme-11 flex items-center justify-center rounded-full">*/}
				{/*						<i className="w-4 h-4" data-feather="users" />*/}
				{/*					</div>*/}
				{/*					<div className="ml-3">Users & Permissions</div>*/}
				{/*				</a>*/}
				{/*				<a href="" className="flex items-center mt-2">*/}
				{/*					<div*/}
				{/*						className="w-8 h-8 bg-theme-14 text-theme-10 flex items-center justify-center rounded-full">*/}
				{/*						<i className="w-4 h-4" data-feather="credit-card" /></div>*/}
				{/*					<div className="ml-3">Transactions Report</div>*/}
				{/*				</a>*/}
				{/*			</div>*/}
				{/*			<div className="search-result__content__title">Users</div>*/}
				{/*			<div className="mb-5">*/}
				{/*				<a href="" className="flex items-center mt-2">*/}
				{/*					<div className="w-8 h-8 image-fit">*/}
				{/*						<img alt="Midone Tailwind HTML Admin Template" className="rounded-full"*/}
				{/*							 src="dist/images/profile-13.jpg" />*/}
				{/*					</div>*/}
				{/*					<div className="ml-3">Angelina Jolie</div>*/}
				{/*					<div*/}
				{/*						className="ml-auto w-48 truncate text-gray-600 text-xs text-right">angelinajolie@left4code.com*/}
				{/*					</div>*/}
				{/*				</a>*/}
				{/*				<a href="" className="flex items-center mt-2">*/}
				{/*					<div className="w-8 h-8 image-fit">*/}
				{/*						<img alt="Midone Tailwind HTML Admin Template" className="rounded-full"*/}
				{/*							 src="dist/images/profile-2.jpg" />*/}
				{/*					</div>*/}
				{/*					<div className="ml-3">Johnny Depp</div>*/}
				{/*					<div*/}
				{/*						className="ml-auto w-48 truncate text-gray-600 text-xs text-right">johnnydepp@left4code.com*/}
				{/*					</div>*/}
				{/*				</a>*/}
				{/*				<a href="" className="flex items-center mt-2">*/}
				{/*					<div className="w-8 h-8 image-fit">*/}
				{/*						<img alt="Midone Tailwind HTML Admin Template" className="rounded-full"*/}
				{/*							 src="dist/images/profile-14.jpg" />*/}
				{/*					</div>*/}
				{/*					<div className="ml-3">Russell Crowe</div>*/}
				{/*					<div*/}
				{/*						className="ml-auto w-48 truncate text-gray-600 text-xs text-right">russellcrowe@left4code.com*/}
				{/*					</div>*/}
				{/*				</a>*/}
				{/*				<a href="" className="flex items-center mt-2">*/}
				{/*					<div className="w-8 h-8 image-fit">*/}
				{/*						<img alt="Midone Tailwind HTML Admin Template" className="rounded-full"*/}
				{/*							 src="dist/images/profile-6.jpg" />*/}
				{/*					</div>*/}
				{/*					<div className="ml-3">Al Pacino</div>*/}
				{/*					<div*/}
				{/*						className="ml-auto w-48 truncate text-gray-600 text-xs text-right">alpacino@left4code.com*/}
				{/*					</div>*/}
				{/*				</a>*/}
				{/*			</div>*/}
				{/*			<div className="search-result__content__title">Products</div>*/}
				{/*			<a href="" className="flex items-center mt-2">*/}
				{/*				<div className="w-8 h-8 image-fit">*/}
				{/*					<img alt="Midone Tailwind HTML Admin Template" className="rounded-full"*/}
				{/*						 src="dist/images/preview-9.jpg" />*/}
				{/*				</div>*/}
				{/*				<div className="ml-3">Samsung Galaxy S20 Ultra</div>*/}
				{/*				<div*/}
				{/*					className="ml-auto w-48 truncate text-gray-600 text-xs text-right">Smartphone &amp; Tablet*/}
				{/*				</div>*/}
				{/*			</a>*/}
				{/*			<a href="" className="flex items-center mt-2">*/}
				{/*				<div className="w-8 h-8 image-fit">*/}
				{/*					<img alt="Midone Tailwind HTML Admin Template" className="rounded-full"*/}
				{/*						 src="dist/images/preview-12.jpg" />*/}
				{/*				</div>*/}
				{/*				<div className="ml-3">Nike Tanjun</div>*/}
				{/*				<div*/}
				{/*					className="ml-auto w-48 truncate text-gray-600 text-xs text-right">Sport &amp; Outdoor*/}
				{/*				</div>*/}
				{/*			</a>*/}
				{/*			<a href="" className="flex items-center mt-2">*/}
				{/*				<div className="w-8 h-8 image-fit">*/}
				{/*					<img alt="Midone Tailwind HTML Admin Template" className="rounded-full"*/}
				{/*						 src="dist/images/preview-10.jpg" />*/}
				{/*				</div>*/}
				{/*				<div className="ml-3">Sony Master Series A9G</div>*/}
				{/*				<div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">Electronic</div>*/}
				{/*			</a>*/}
				{/*			<a href="" className="flex items-center mt-2">*/}
				{/*				<div className="w-8 h-8 image-fit">*/}
				{/*					<img alt="Midone Tailwind HTML Admin Template" className="rounded-full"*/}
				{/*						 src="dist/images/preview-7.jpg" />*/}
				{/*				</div>*/}
				{/*				<div className="ml-3">Samsung Galaxy S20 Ultra</div>*/}
				{/*				<div*/}
				{/*					className="ml-auto w-48 truncate text-gray-600 text-xs text-right">Smartphone &amp; Tablet*/}
				{/*				</div>*/}
				{/*			</a>*/}
				{/*		</div>*/}
				{/*	</div>*/}
				{/*</div>*/}
				{/*END: Search */}
				{/*BEGIN: Notifications */}
				{/*<div className="intro-x dropdown relative mr-auto sm:mr-6">*/}
				{/*	<div className="dropdown-toggle notification notification--bullet cursor-pointer">*/}
				{/*		<i*/}
				{/*		data-feather="bell" className="notification__icon" />*/}
				{/*	</div>*/}
				{/*	<div*/}
				{/*		className="notification-content dropdown-box mt-8 absolute top-0 left-0 sm:left-auto sm:right-0 z-20 -ml-10 sm:ml-0">*/}
				{/*		<div className="notification-content__box dropdown-box__content box">*/}
				{/*			<div className="notification-content__title">Notifications</div>*/}
				{/*			<div className="cursor-pointer relative flex items-center ">*/}
				{/*				<div className="w-12 h-12 flex-none image-fit mr-1">*/}
				{/*					<img alt="Midone Tailwind HTML Admin Template" className="rounded-full"*/}
				{/*						 src="dist/images/profile-13.jpg" />*/}
				{/*						<div*/}
				{/*							className="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white">*/}

				{/*						</div>*/}
				{/*				</div>*/}
				{/*				<div className="ml-2 overflow-hidden">*/}
				{/*					<div className="flex items-center">*/}
				{/*						<a href="javascript:" className="font-medium truncate mr-5">Angelina Jolie</a>*/}
				{/*						<div className="text-xs text-gray-500 ml-auto whitespace-no-wrap">05:09 AM</div>*/}
				{/*					</div>*/}
				{/*					<div className="w-full truncate text-gray-600">Contrary to popular belief, Lorem*/}
				{/*						Ipsum is not simply random text. It has roots in a piece of classical Latin*/}
				{/*						literature from 45 BC, making it over 20*/}
				{/*					</div>*/}
				{/*				</div>*/}
				{/*			</div>*/}
				{/*			<div className="cursor-pointer relative flex items-center mt-5">*/}
				{/*				<div className="w-12 h-12 flex-none image-fit mr-1">*/}
				{/*					<img alt="Midone Tailwind HTML Admin Template" className="rounded-full"*/}
				{/*						 src="dist/images/profile-2.jpg" />*/}
				{/*						<div*/}
				{/*							className="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white">*/}

				{/*						</div>*/}
				{/*				</div>*/}
				{/*				<div className="ml-2 overflow-hidden">*/}
				{/*					<div className="flex items-center">*/}
				{/*						<a href="javascript:;" className="font-medium truncate mr-5">Johnny Depp</a>*/}
				{/*						<div className="text-xs text-gray-500 ml-auto whitespace-no-wrap">05:09 AM</div>*/}
				{/*					</div>*/}
				{/*					<div className="w-full truncate text-gray-600">It is a long established fact that a*/}
				{/*						reader will be distracted by the readable content of a page when looking at its*/}
				{/*						layout. The point of using Lorem*/}
				{/*					</div>*/}
				{/*				</div>*/}
				{/*			</div>*/}
				{/*			<div className="cursor-pointer relative flex items-center mt-5">*/}
				{/*				<div className="w-12 h-12 flex-none image-fit mr-1">*/}
				{/*					<img alt="Midone Tailwind HTML Admin Template" className="rounded-full"*/}
				{/*						 src="dist/images/profile-14.jpg" />*/}
				{/*						<div*/}
				{/*							className="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white">*/}

				{/*						</div>*/}
				{/*				</div>*/}
				{/*				<div className="ml-2 overflow-hidden">*/}
				{/*					<div className="flex items-center">*/}
				{/*						<a href="javascript:;" className="font-medium truncate mr-5">Russell Crowe</a>*/}
				{/*						<div className="text-xs text-gray-500 ml-auto whitespace-no-wrap">01:10 PM</div>*/}
				{/*					</div>*/}
				{/*					<div className="w-full truncate text-gray-600">Contrary to popular belief, Lorem*/}
				{/*						Ipsum is not simply random text. It has roots in a piece of classical Latin*/}
				{/*						literature from 45 BC, making it over 20*/}
				{/*					</div>*/}
				{/*				</div>*/}
				{/*			</div>*/}
				{/*			<div className="cursor-pointer relative flex items-center mt-5">*/}
				{/*				<div className="w-12 h-12 flex-none image-fit mr-1">*/}
				{/*					<img alt="Midone Tailwind HTML Admin Template" className="rounded-full"*/}
				{/*						 src="dist/images/profile-6.jpg" />*/}
				{/*						<div*/}
				{/*							className="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white">*/}

				{/*						</div>*/}
				{/*				</div>*/}
				{/*				<div className="ml-2 overflow-hidden">*/}
				{/*					<div className="flex items-center">*/}
				{/*						<a href="javascript:;" className="font-medium truncate mr-5">Al Pacino</a>*/}
				{/*						<div className="text-xs text-gray-500 ml-auto whitespace-no-wrap">05:09 AM</div>*/}
				{/*					</div>*/}
				{/*					<div className="w-full truncate text-gray-600">There are many variations of passages*/}
				{/*						of Lorem Ipsum available, but the majority have suffered alteration in some*/}
				{/*						form, by injected humour, or randomi*/}
				{/*					</div>*/}
				{/*				</div>*/}
				{/*			</div>*/}
				{/*			<div className="cursor-pointer relative flex items-center mt-5">*/}
				{/*				<div className="w-12 h-12 flex-none image-fit mr-1">*/}
				{/*					<img alt="Midone Tailwind HTML Admin Template" className="rounded-full"*/}
				{/*						 src="dist/images/profile-5.jpg" />*/}
				{/*						<div*/}
				{/*							className="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white">*/}

				{/*						</div>*/}
				{/*				</div>*/}
				{/*				<div className="ml-2 overflow-hidden">*/}
				{/*					<div className="flex items-center">*/}
				{/*						<a href="javascript:;" className="font-medium truncate mr-5">Edward Norton</a>*/}
				{/*						<div className="text-xs text-gray-500 ml-auto whitespace-no-wrap">01:10 PM</div>*/}
				{/*					</div>*/}
				{/*					<div className="w-full truncate text-gray-600">Lorem Ipsum is simply dummy text of*/}
				{/*						the printing and typesetting industry. Lorem Ipsum has been the industry&#039;s*/}
				{/*						standard dummy text ever since the 1500*/}
				{/*					</div>*/}
				{/*				</div>*/}
				{/*			</div>*/}
				{/*		</div>*/}
				{/*	</div>*/}
				{/*</div>*/}
				{/*END: Notifications*/}
				{/*BEGIN: Account Menu*/}
				<div className="intro-x dropdown w-8 h-8 relative">
					<div className="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in">
						<img alt="Midone Tailwind HTML Admin Template" src="dist/images/user.png" />
					</div>
					<div className="dropdown-box mt-10 absolute w-56 top-0 right-0 z-20">
						<div className="dropdown-box__content box bg-theme-38 text-white">
							<div className="p-4 border-b border-theme-40">
								<div className="font-medium">Angelina Jolie</div>
								<div className="text-xs text-theme-41">Software Engineer</div>
							</div>
							<div className="p-2">
								<a href="#"
								   className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 rounded-md">
									<i data-feather="user" className="w-4 h-4 mr-2"></i> Profile </a>
								<a href="#"
								   className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 rounded-md">
									<i data-feather="edit" className="w-4 h-4 mr-2"></i> Add Account </a>
								<a href="#"
								   className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 rounded-md">
									<i data-feather="lock" className="w-4 h-4 mr-2"></i> Reset Password </a>
								<a href="#"
								   className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 rounded-md">
									<i data-feather="help-circle" className="w-4 h-4 mr-2"></i> Help </a>
							</div>
							<div className="p-2 border-t border-theme-40">
								<a href="#"
								   className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 rounded-md">
									<i data-feather="toggle-right" className="w-4 h-4 mr-2"></i> Logout </a>
							</div>
						</div>
					</div>
				</div>
				{/*END: Account Menu*/}
			</div>
	);
	}
	}

	export default TopBar;