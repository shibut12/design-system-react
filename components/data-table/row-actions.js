'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash.isfunction');

var _lodash2 = _interopRequireDefault(_lodash);

var _menuDropdown = require('../menu-dropdown');

var _menuDropdown2 = _interopRequireDefault(_menuDropdown);

var _event = require('../../utilities/event');

var _event2 = _interopRequireDefault(_event);

var _constants = require('../../utilities/constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Removes the need for `PropTypes`.


// ### Event Helpers


// ### isFunction
var PropTypes = _react2.default.PropTypes;

/**
 * RowActions provide a mechanism for defining a menu to display alongside each row in the DataTable.
 */


// ## Constants


// ## Children
/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

// ### React

var DataTableRowActions = _react2.default.createClass({
	// ### Display Name
	// Always use the canonical component name as the React display name.
	displayName: _constants.DATA_TABLE_ROW_ACTIONS,

	// ### Prop Types
	propTypes: {
		/**
   * Description of the menu for screenreaders.
   */
		assistiveText: PropTypes.string,
		/**
   * Class names to be added to the actions menu.
   */
		className: PropTypes.string,
		id: PropTypes.string,
		item: PropTypes.object,
		onAction: PropTypes.func,
		options: PropTypes.array.isRequired
	},

	getDefaultProps: function getDefaultProps() {
		return {
			assistiveText: 'Actions'
		};
	},


	// ### Render
	render: function render() {
		// i18n
		return _react2.default.createElement(
			'td',
			{
				className: '', 'data-label': 'Actions',
				onClick: this.handleClick,
				style: { width: '3.25rem' }
			},
			_react2.default.createElement(_menuDropdown2.default, {
				align: 'right',
				assistiveText: this.props.assistiveText,
				buttonClassName: 'slds-button--icon-x-small',
				buttonVariant: 'icon',
				className: this.props.className,
				options: this.props.options,
				hint: true,
				iconName: 'down',
				iconSize: 'small',
				iconVariant: 'border-filled',
				id: this.props.id,
				onSelect: this.handleSelect
			})
		);
	},
	handleClick: function handleClick(e) {
		_event2.default.trap(e);
	},
	handleSelect: function handleSelect(selection) {
		if ((0, _lodash2.default)(this.props.onAction)) {
			this.props.onAction(this.props.item, selection);
		}
	}
});

module.exports = DataTableRowActions;