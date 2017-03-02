'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = require('lodash.isfunction');

var _lodash2 = _interopRequireDefault(_lodash);

var _icon = require('../../icon');

var _icon2 = _interopRequireDefault(_icon);

var _constants = require('../../../utilities/constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /*
                                                                                                                                                                                                                  Copyright (c) 2015, salesforce.com, inc. All rights reserved.
                                                                                                                                                                                                                  
                                                                                                                                                                                                                  Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
                                                                                                                                                                                                                  Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
                                                                                                                                                                                                                  Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
                                                                                                                                                                                                                  Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
                                                                                                                                                                                                                  
                                                                                                                                                                                                                  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
                                                                                                                                                                                                                  */

// ### React


// ### classNames


// ### isFunction


// ## Children


// ## Constants


// Removes the need for `PropTypes`.
var PropTypes = _react2.default.PropTypes;

/**
 * Used internally, renders each individual column heading.
 */

var DataTableHeaderCell = _react2.default.createClass({
	// ### Display Name
	// Always use the canonical component name as the React display name.
	displayName: _constants.DATA_TABLE_HEADER_CELL,

	// ### Prop Types
	propTypes: {
		/**
   * Text for sort action on table column header
  *
   */
		assistiveTextForColumnSort: PropTypes.string,
		/**
   * Text announced once a column is sorted in ascending order
   */
		assistiveTextForColumnSortedAscending: PropTypes.string,
		/**
   * Text announced once a column is sorted in descending order
   */
		assistiveTextForColumnSortedDescending: PropTypes.string,
		id: PropTypes.string.isRequired,
		/**
   * Indicates if column is sorted.
   */
		isSorted: PropTypes.bool,
		/**
   * The column label.
   */
		label: PropTypes.string,
		/**
   * The function to execute on sort.
   */
		onSort: PropTypes.func,
		/**
   * The property which corresponds to this column.
   */
		property: PropTypes.string,
		/**
   * Whether or not the column is sortable.
   */
		sortable: PropTypes.bool,
		/**
   * The current sort direction.
   */
		sortDirection: PropTypes.oneOf(['desc', 'asc'])
	},

	getInitialState: function getInitialState() {
		return {
			sortDirection: 'asc'
		};
	},


	// ### Render
	// Should return a `<th></th>`.
	render: function render() {
		var _classNames;

		var _props = this.props,
		    isSorted = _props.isSorted,
		    label = _props.label,
		    sortable = _props.sortable;


		var sortDirection = this.props.sortDirection || this.state.sortDirection;
		var expandedSortDirection = sortDirection === 'desc' ? 'descending' : 'ascending';
		var ariaSort = isSorted ? expandedSortDirection : null;

		return _react2.default.createElement(
			'th',
			{
				'aria-sort': ariaSort,
				className: (0, _classnames2.default)((_classNames = {
					'slds-is-sortable': sortable,
					'slds-is-sorted': isSorted
				}, _defineProperty(_classNames, 'slds-is-sorted--' + sortDirection, sortDirection), _defineProperty(_classNames, 'slds-is-sorted--asc', isSorted && !sortDirection), _classNames)),
				focusable: sortable ? true : null,
				scope: 'col'
			},
			sortable ? _react2.default.createElement(
				'a',
				{
					href: 'javascript:void(0)' // eslint-disable-line no-script-url
					, className: 'slds-th__action slds-text-link--reset',
					onClick: this.handleSort,
					tabIndex: '0'
				},
				_react2.default.createElement(
					'span',
					{ className: 'slds-assistive-text' },
					this.props.assistiveTextForColumnSort,
					' '
				),
				_react2.default.createElement(
					'span',
					{ className: 'slds-truncate', title: label },
					label
				),
				_react2.default.createElement(_icon2.default, {
					className: 'slds-is-sortable__icon',
					category: 'utility',
					name: sortDirection === 'desc' || !sortDirection ? 'arrowdown' : 'arrowup',
					size: 'x-small'
				}),
				sortDirection ? _react2.default.createElement(
					'span',
					{ className: 'slds-assistive-text', 'aria-live': 'assertive', 'aria-atomic': 'true' },
					sortDirection === 'asc' ? this.props.assistiveTextForColumnSortedAscending : this.props.assistiveTextForColumnSortedDescending
				) : null
			) : _react2.default.createElement(
				'div',
				{ className: 'slds-truncate' },
				label
			)
		);
	},
	handleSort: function handleSort(e) {
		var oldSortDirection = this.props.sortDirection || this.state.sortDirection;
		var sortDirection = oldSortDirection === 'asc' ? 'desc' : 'asc';
		var data = {
			property: this.props.property,
			sortDirection: sortDirection
		};

		this.setState({
			sortDirection: sortDirection
		});

		if ((0, _lodash2.default)(this.props.onSort)) {
			this.props.onSort(data, e);
		}
	}
});

exports.default = DataTableHeaderCell;