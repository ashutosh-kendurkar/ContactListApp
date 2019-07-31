import React from 'react';
import  './../../src/App.css'
const ModalCmp = ({ show, modalTitle, children, handleClose }) => {
	const showClass = show ? 'c-modal' : 'c-modal-hide';
	return (
		<div className={showClass}>
			<div className='modal-content'>
				<div className='__content'>
				{children}
				</div>
				<i className='fa fa-times c-modal__button-close' onClick={handleClose}></i>
			</div>
		</div>
	)
}
		
ModalCmp.defaultProps = {
	show: false,
	modalTitle: 'Add New Contact',
	children:'nothing to show',
	handleClose: () => {
		// handleChange function here
	  }
  }
export default ModalCmp;