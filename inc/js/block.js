( function( editor, components, i18n, element ) {
	var el 						= element.createElement;
	var registerBlockType 		= wp.blocks.registerBlockType;
	var RichText 				= wp.editor.RichText;
	var BlockControls 			= wp.editor.BlockControls;
	var AlignmentToolbar 		= wp.editor.AlignmentToolbar;
	var InspectorControls 		= wp.editor.InspectorControls;
	var ColorPalette 			= wp.components.ColorPalette;
	var RangeControl 			= wp.components.RangeControl;
	var LeadTextRangeControl 	= wp.components.RangeControl;
	var SelectControl 			= wp.components.SelectControl;

	registerBlockType( 'zidithemes/align-bg-block', { // The name of our block. 
		title: i18n.__( 'Zidithemes Jumbotron' ), // The title of our block.
		description: i18n.__( 'Zidithemes Jumbotron Gutenberg Block' ), // The description of our block.
		icon: 'portfolio', 
		category: 'common', 
		attributes: { 
			title: {
				type: 'array',
				source: 'children',
				selector: 'h2',
			},
			leadtext: {
				type: 'array',
				source: 'children',
				selector: 'p',
			},
			leadtextfont: {
				type: 'range',
			},
			TextLeadRangeButton: {
				type: 'range',
				default: 16,
			},
			textlink: {
				type: 'url',
			},
			extLink: {
				type: 'url',
			},
			leadtextmargintop: {
				type: 'range',
				default: 1,
			},
			jumbtextmarginleft: {
				type: 'range',
				default: 1,
			},
			jumbtextmarginright: {
				type: 'range',
				default: 1,
			},
			jumbtextmarginbottom: {
				type: 'range',
				default: 1,
			},
			jumbtextmargintop: {
				type: 'range',
				default: 1,
			},
			jumbheightValue: {
				type: 'range',
				default: 45,
			},
			selectJumbButton: {
				type: 'string',
				default: 'center',
			},
			alignment: {
				type: 'string',
				default: 'center',
			},
			colorpaletteButton: {
				type: 'string',
			},
			rangeButton: {
				type: 'range',
				default: 21,
			},
			textcolorpalette: {
				type: 'string',
			}
		},

		edit: function( props ) {

			var attributes 	 			= props.attributes;
			var alignment 				= props.attributes.alignment;
			var colorpaletteButton 		= props.attributes.colorpaletteButton;
			var textcolorpalette 		= props.attributes.textcolorpalette;
			var TextLeadRangeButton 	= props.attributes.TextLeadRangeButton;
			var rangeButton 			= props.attributes.rangeButton;
			var leadtext 				= props.attributes.leadtext;
			var selectJumbButton 		= props.attributes.selectJumbButton;
			var jumbheightValue 		= props.attributes.jumbheightValue;
			var leadtextmargintop 		= props.attributes.leadtextmargintop;
			var jumbtextmargintop 		= props.attributes.jumbtextmargintop;
			var jumbtextmarginleft 		= props.attributes.jumbtextmarginleft;
			var jumbtextmarginright 	= props.attributes.jumbtextmarginright;
			var jumbtextmarginbottom 	= props.attributes.jumbtextmarginbottom;

			function onChangeAlignment( newAlignment ) {
				props.setAttributes( { alignment: newAlignment } );
			}

			return [
				//BEGIN INSPECTOR CONTROLS
				// Display the block options in the inspector panel.
				el( InspectorControls, { key: 'inspector' }, 

					//BEGIN INSPECTOR ZIDITHEMES JUMBOTRON
					el( components.PanelBody, 
						{
							title: i18n.__('Zidithemes Jumbotron Settings'),
							className: 'block-font-size',
							initialOpen: false,
						},
						el('p', {}, i18n.__('')),
						
						el( SelectControl, {
							label: i18n.__( 'Move Text Wrap' ),
							value: selectJumbButton,
							options: [ 
            							{ label: 'start', value: 'flex-start' },
							            { label: 'center', value: 'center' },
							            { label: 'end', value: 'flex-end' },
	                        		 ],
							onChange: function( newSelectJumbBox ) {
								props.setAttributes( { selectJumbButton: newSelectJumbBox } );
							},
						} ),
						el( RangeControl, {
							beforeIcon: 'arrow-left-alt2',
							afterIcon: 'arrow-right-alt2',
							label: i18n.__( 'Jumbotron Height' ),
							initialPosition: 40,
							value: jumbheightValue,
							onChange: function( newjumbheightValue ) {
								props.setAttributes( { jumbheightValue: newjumbheightValue } );
							},
							min: 0,
							max: 100,
						} ),
						el( RangeControl, {
							beforeIcon: 'arrow-left-alt2',
							afterIcon: 'arrow-right-alt2',
							label: i18n.__( 'Jumbotron Content Margin Top' ),
							value: jumbtextmargintop,
							onChange: function( newjumbtextmargintop ) {
								props.setAttributes( { jumbtextmargintop: newjumbtextmargintop } );
							},
							min: -120,
							max: 120,
						} ),
						el( RangeControl, {
							beforeIcon: 'arrow-left-alt2',
							afterIcon: 'arrow-right-alt2',
							label: i18n.__( 'Jumbotron Content Margin Bottom' ),
							value: jumbtextmarginbottom,
							onChange: function( newjumbtextmarginbottom ) {
								props.setAttributes( { jumbtextmarginbottom: newjumbtextmarginbottom } );
							},
							min: -120,
							max: 120,
						} ),
						el( RangeControl, {
							beforeIcon: 'arrow-left-alt2',
							afterIcon: 'arrow-right-alt2',
							label: i18n.__( 'Jumbotron Content Margin Left' ),
							value: jumbtextmarginleft,
							onChange: function( newjumbtextmarginleft ) {
								props.setAttributes( { jumbtextmarginleft: newjumbtextmarginleft } );
							},
							min: -120,
							max: 120,
						} ),
						el( RangeControl, {
							beforeIcon: 'arrow-left-alt2',
							afterIcon: 'arrow-right-alt2',
							label: i18n.__( 'Jumbotron Content Margin Right' ),
							value: jumbtextmarginright,
							onChange: function( newjumbtextmarginright ) {
								props.setAttributes( { jumbtextmarginright: newjumbtextmarginright } );
							},
							min: -120,
							max: 120,
						} ),
						el('p', {}, i18n.__('')),
						el( RangeControl, {
							beforeIcon: 'arrow-left-alt2',
							afterIcon: 'arrow-right-alt2',
							label: i18n.__( 'Header Text  Font Size' ),
							value: rangeButton,
							onChange: function( newRange ) {
								props.setAttributes( { rangeButton: newRange } );
							},
							min: 0,
							max: 60,
						} ),
						el( RangeControl, {
							beforeIcon: 'arrow-left-alt2',
							afterIcon: 'arrow-right-alt2',
							label: i18n.__( 'Lead Text  Font Size' ),
							value: TextLeadRangeButton,
							onChange: function( newLeadRange ) {
								props.setAttributes( { TextLeadRangeButton: newLeadRange } );
							},
							min: 0,
							max: 60,
						} ),
						el( RangeControl, {
							beforeIcon: 'arrow-left-alt2',
							afterIcon: 'arrow-right-alt2',
							label: i18n.__( 'Lead Text Margin Top' ),
							value: leadtextmargintop,
							onChange: function( newleadtextmargintop ) {
								props.setAttributes( { leadtextmargintop: newleadtextmargintop } );
							},
							min: -20,
							max: 120,
						} ),
					),

					//BEGIN INSPECTOR COLOR CONTROLS
					el( components.PanelBody, {
							title: i18n.__( 'Zidithemes Jumbotron Color' ),
							className: 'block-color-links',
							initialOpen: false,
						},
						el( 'p', {}, i18n.__( 'Background Color' ) ),
						el( ColorPalette, {
							label: i18n.__( 'Color Palette' ),
							colors: [ 
            							{ name: 'red', color: '#f00' }, 
								        { name: 'white', color: '#fff' },
								        { name: 'light-dark', color: '#353439'} 
	                        		 ],
							value: colorpaletteButton,
							onChange: function( newcolorbgPaletteButton ) {
								props.setAttributes( { colorpaletteButton: newcolorbgPaletteButton } );
							},
						} ),

						el( 'p', {}, i18n.__( 'Text Color' ) ),
						el( ColorPalette, {
							
							colors: [ 
            							{ name: 'red', color: '#f00' }, 
								        { name: 'white', color: '#fff' }, 
	                        		 ],
							value: textcolorpalette,
							onChange: function( newtextcolorpalette ) {
								props.setAttributes( { textcolorpalette: newtextcolorpalette } );
							},
						} ),
					), ),
				//END INSPECTOR COLOR CONTROLS

				//BEGIN BLOCK CONTROLS
				// Display controls when the block is clicked on.
				el( BlockControls, { key: 'controls' }, 
					
					el( AlignmentToolbar, {
						value: alignment,
						onChange: onChangeAlignment,
					} )
				),
				//END BLOCK CONTROLS

				//BEGIN EDITOR STYLING
				el( 'div', { className: props.className, 
					style: { backgroundColor : colorpaletteButton, height: jumbheightValue + 'vh',
								justifyContent: selectJumbButton
						 }
				},
					
					el( 'div', {
						className: 'zidithemes-jumbotron-content ' , 
						style: { textAlign: alignment,
								 height: 74 + 'px',
								 marginTop: jumbtextmargintop + 'px',
								 marginBottom: jumbtextmarginbottom + 'px',
								 marginLeft: jumbtextmarginleft + 'px',
								 marginRight: jumbtextmarginright + 'px',
						   } },
						el( RichText, {
							tagName: 'h2',
							placeholder: 'Header text here',
							style:  { color : textcolorpalette, fontSize : rangeButton + 'px' } ,
							keepPlaceholderOnFocus: true,
							value: attributes.title,
							isSelected: false,
							onChange: function( newTitle ) {
								props.setAttributes( { title: newTitle } );
							},
						} ),

						el( RichText, {
							tagName: 'p',
							placeholder: 'Lead text here',
							style:  { color : textcolorpalette, fontSize : TextLeadRangeButton + 'px', marginTop: leadtextmargintop + 'px' } ,
							keepPlaceholderOnFocus: true,
							value: attributes.leadtext,
							isSelected: false,
							onChange: function( newleadtext ) {
								props.setAttributes( { leadtext: newleadtext } );
							},
						} ),						
						
					),
				)
				//END EDITOR STYLING
			];
		},

		save: function( props ) {
			var attributes 				= props.attributes;
			var alignment 				= props.attributes.alignment;
			var colorpaletteButton 		= props.attributes.colorpaletteButton;
			var textcolorpalette 		= props.attributes.textcolorpalette;
			var selectJumbButton 		= props.attributes.selectJumbButton;
			var TextLeadRangeButton 	= props.attributes.TextLeadRangeButton;
			var rangeButton 			= props.attributes.rangeButton;
			var leadtext 				= props.attributes.leadtext;
			var selectJumbButton 		= props.attributes.selectJumbButton;
			var jumbheightValue 		= props.attributes.jumbheightValue;
			var leadtextmargintop		= props.attributes.leadtextmargintop;
			var jumbtextmargintop 		= props.attributes.jumbtextmargintop;
			var jumbtextmarginleft 		= props.attributes.jumbtextmarginleft;
			var jumbtextmarginright 	= props.attributes.jumbtextmarginright;
			var jumbtextmarginbottom 	= props.attributes.jumbtextmarginbottom;

			//BEGIN FRONT END STYLING
			return (
				el( 'div', {
					className: props.className,
					style: { backgroundColor : attributes.colorpaletteButton, textAlign: attributes.alignment ,height : attributes.jumbheightValue + 'vh',
					justifyContent: selectJumbButton }
				},
					
					el( 'div', {
						className: 'zidithemes-jumbotron-content',
						style: {  textAlign: alignment,
								  height: 74 + 'px',
								  marginTop: jumbtextmargintop + 'px',
								  marginBottom: jumbtextmarginbottom + 'px',
								  marginLeft: jumbtextmarginleft + 'px',
								  marginRight: jumbtextmarginright + 'px',
						  }
					},
						el( RichText.Content, {
							tagName: 'h2',
							style: { fontSize: attributes.rangeButton , color : attributes.textcolorpalette },
							value: attributes.title
						} ),
						el( RichText.Content, {
							tagName: 'p',
							style: { color : attributes.textcolorpalette,  fontSize: attributes.TextLeadRangeButton + 'px',  marginTop: attributes.leadtextmargintop + 'px' },
							value: attributes.leadtext
						} ),
						
					)
				)
			);
			//END FRONT END STYLING
		},
	} );

} )(
	window.wp.editor,
	window.wp.components,
	window.wp.i18n,
	window.wp.element,
);
