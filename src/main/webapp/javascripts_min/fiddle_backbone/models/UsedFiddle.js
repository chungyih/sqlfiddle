define(["Backbone"],function(e){var t=e.Model.extend({defaults:{fragment:"",full_name:"",ddl:"",sql:""},initialize:function(){this.set("last_used",new Date)}});return t})