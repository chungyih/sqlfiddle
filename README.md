SQL Fiddle
==========

##About

See [the SQL Fiddle about page](http://sqlfiddle.com/about.html) page for background on the site.

## Getting the project up and running

Fork the code on github to a local branch for youself.  

From within your local working copy, **copy the file src/main/webapp/config/environment.cfm.example to src/main/webapp/config/environment.cfm**

If you haven't already got [Maven](http://maven.apache.org), install it now.

From the root of your working copy, run this:

    mvn jetty:run

Once everything downloads and runs, the app will be running on [localhost:8080](http://localhost:8080).  Watch for this message in your console:

    [INFO] Started Jetty Server
    
You can access your local server after you see this.

You must set the Railo Admin password right away.  Here's the link to get there, once you have Jetty running:

[Local Railo Admin](http://localhost:8080/railo-context/admin/web.cfm)

The simplest thing to do would be to set the password just to "password" (no quotes).  This is the default password in the config.  If you choose to use another Railo admin password, you must set it in the file src/main/webapp/config/design/settings.cfm and update the CFAdminPassword.

You should now have a functional copy of SQL Fiddle running locally.  Out of the box, the only database "servers" you have are SQLite instances (since those actually run in your browser).  Setting up others requires separate work for each one (and isn't really necessary for most development work).

The document root being served is src/main/webapp.  You can edit the files under there and see the changes immediately upon refresh (no need to restart the jetty server).

I'm happy to entertain pull requests!

Thanks, Jake