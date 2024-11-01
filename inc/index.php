<?php 

function zidithemes_jumbotron_block() {
	
	if ( ! function_exists( 'register_block_type' ) ) {
		// Gutenberg is not active.
		return;
	}
	
	// Scripts.
	wp_register_script(
		'zidithemes-jumbotron-block-script', // Handle.
		plugins_url( 'js/block.js', __FILE__ ), // Block.js: We register the block here.
		array( 'wp-blocks', 'wp-element', 'wp-i18n', 'wp-editor' ) // Dependencies, defined above.
	);

	// Styles.
	wp_register_style(
		'zidithemes-jumbotron-block-editor-style', // Handle.
		plugins_url( 'css/editor.css', __FILE__ ), // Block backend CSS.
		array( 'wp-edit-blocks' ) // Dependency to include the CSS after it.
	);
	wp_register_style(
		'zidithemes-jumbotron-block-frontend-style', // Handle.
		plugins_url( 'css/style.css', __FILE__ ), // Block front end CSS.
		array( 'wp-edit-blocks' ) // Dependency to include the CSS after it.
	);

	// Here we actually register the block with WP, again using our namespacing
	// We also specify the editor script to be used in the Gutenberg interface
	register_block_type( 'zidithemes-jumbotron/block', array(
		'editor_script' 	=> 'zidithemes-jumbotron-block-script',
		'editor_style' 		=> 'zidithemes-jumbotron-block-editor-style',
		'style' 			=> 'zidithemes-jumbotron-block-frontend-style',
	) );



}


// Hook: Editor assets.
add_action( 'init', 'zidithemes_jumbotron_block' );

?>