import React, {Component} from 'react';

class DataTable extends Component {
	render() {
		return (
			<>
				 {/*BEGIN: Data List -->*/}
				<div className="intro-y col-span-12 overflow-auto lg:overflow-visible">
					<table className="table table-report -mt-2">
						<thead>
						<tr>
							<th className="whitespace-no-wrap">IMAGES</th>
							<th className="whitespace-no-wrap">PRODUCT NAME</th>
							<th className="whitespace-no-wrap">STOCK</th>
							<th className="whitespace-no-wrap">STATUS</th>
							<th className="whitespace-no-wrap">ACTIONS</th>
						</tr>
						</thead>
						<tbody>
						<tr className="intro-x">
							<td className="w-40">
								<div className="flex">
									<div className="w-10 h-10 image-fit zoom-in">
										<img alt="Midone Tailwind HTML Admin Template" className="tooltip rounded-full" src="dist/images/preview-4.jpg" title="Uploaded at 17 July 2021" />
									</div>
									<div className="w-10 h-10 image-fit zoom-in -ml-5">
										<img alt="Midone Tailwind HTML Admin Template" className="tooltip rounded-full" src="dist/images/preview-4.jpg" title="Uploaded at 17 July 2021" />
									</div>
									<div className="w-10 h-10 image-fit zoom-in -ml-5">
										<img alt="Midone Tailwind HTML Admin Template" className="tooltip rounded-full" src="dist/images/preview-10.jpg" title="Uploaded at 17 July 2021" />
									</div>
								</div>
							</td>
							<td>
								<div className="font-medium whitespace-no-wrap">Photography</div>
							</td>
							<td className="font-medium whitespace-no-wrap">50</td>
							<td>
								<div className="font-medium whitespace-no-wrap text-theme-6">
									Inactive
								</div>
							</td>
							<td className="table-report__action w-56">
								<div className="flex">
									<a className="flex items-center mr-3" href="javascript:;"> <i data-feather="check-square" className="w-4 h-4 mr-1"></i> Edit </a>
									<a className="flex items-center text-theme-6" href="javascript:;" data-toggle="modal" data-target="#delete-confirmation-modal"> <i data-feather="trash-2" className="w-4 h-4 mr-1"></i> Delete </a>
								</div>
							</td>
						</tr>
						</tbody>
					</table>
				</div>
				{/*END: Data List -->*/}
				{/*BEGIN: Pagination -->*/}
				<div className="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-no-wrap items-center">
					<ul className="pagination">
						<li>
							<a className="pagination__link" href=""> <i className="w-4 h-4" data-feather="chevrons-left"></i> </a>
						</li>
						<li>
							<a className="pagination__link" href=""> <i className="w-4 h-4" data-feather="chevron-left"></i> </a>
						</li>
						<li> <a className="pagination__link" href="">...</a> </li>
						<li> <a className="pagination__link" href="">1</a> </li>
						<li> <a className="pagination__link pagination__link--active" href="">2</a> </li>
						<li> <a className="pagination__link" href="">3</a> </li>
						<li> <a className="pagination__link" href="">...</a> </li>
						<li>
							<a className="pagination__link" href=""> <i className="w-4 h-4" data-feather="chevron-right"></i> </a>
						</li>
						<li>
							<a className="pagination__link" href=""> <i className="w-4 h-4" data-feather="chevrons-right"></i> </a>
						</li>
					</ul>
					<select className="w-20 input box mt-3 sm:mt-0">
						<option>10</option>
						<option>25</option>
						<option>35</option>
						<option>50</option>
					</select>
				</div>
				{/*END: Pagination -->	*/}
			</>
		);
	}
}

export default DataTable;