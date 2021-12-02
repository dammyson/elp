import React, { useLayoutEffect, forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const PageWrapper = forwardRef(({  className, children }, ref) => {
	

	return (
		<div ref={ref} className={classNames('page-wrapper', 'container-fluid', className)}>
			{children}
		</div>
	);
});
PageWrapper.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};
PageWrapper.defaultProps = {
	title: null,
	description: null,
	className: null,
};

export default PageWrapper;
