/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('Spotify.Application', {
	extend: 'Ext.app.Application',

	name: 'Spotify',

	launch() {
		/*
		 // <debug>
		 try {
		 SenchaInspector.init();
		 } catch (e) { }
		 // </debug>
		 */
	},

	onAppUpdate() {
		Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
			choice => {
				if (choice === 'yes') {
					window.location.reload();
				}
			}
		);
	}
});
