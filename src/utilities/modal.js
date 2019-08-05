import React from 'react';
import './../../src/App.css'
const ModalCmp = ({ show, modalTitle, children, handleClose }) => {
	if (!show) return <span />;
	return (
		<div className="c-modal">
			<div className="c-modal1">
				<div className="modal-content1">
					<div className="cmodal-header">
						<button type="button" className="close" data-dismiss="modal" onClick={handleClose}>&times;</button>
						<h4 className="cmodal-title">{modalTitle}</h4>
					</div>
					<div className="cmodal-body">
						{children}
					</div>
					<div className="cmodal-footer"></div>
				</div>
			</div>
		</div>
	)
}

ModalCmp.defaultProps = {
	show: false,
	modalTitle: 'Add New Contact',
	children: 'nothing to show',
	handleClose: () => {
		// handleChange default function here
	}
}
export default ModalCmp;