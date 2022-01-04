(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{1885:function(e,t,a){"use strict";a.r(t);var o=a(26),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"cratedb"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cratedb"}},[e._v("#")]),e._v(" CrateDB")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://crate.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CrateDB"),o("OutboundLink")],1),e._v(" is an open-source distributed SQL database management system that integrates a fully searchable document-oriented data store based on a shared-nothing architecture, and is designed for high scalability.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),o("p",[e._v("You can find authentication information for this node "),o("RouterLink",{attrs:{to:"/nodes/credentials/CrateDB/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),o("h2",{attrs:{id:"basic-operations"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),o("Resource",{attrs:{node:"n8n-nodes-base.crateDb"}}),e._v(" "),o("h2",{attrs:{id:"example-usage"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),o("p",[e._v("This workflow allows you to create a table and insert data into it in CrateDB. You can also find the "),o("a",{attrs:{href:"https://n8n.io/workflows/597",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),o("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following nodes.")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Set/"}},[e._v("Set")])],1),e._v(" "),o("li",[o("a",{attrs:{href:""}},[e._v("CrateDB")])])]),e._v(" "),o("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(872),alt:"A workflow with the CrateDB node"}})]),e._v(" "),o("h3",{attrs:{id:"_1-start-node"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),o("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),o("h3",{attrs:{id:"_2-cratedb-node-execute-query"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-cratedb-node-execute-query"}},[e._v("#")]),e._v(" 2. CrateDB node (Execute Query)")]),e._v(" "),o("ol",[o("li",[e._v("First of all, you'll have to enter credentials for the CrateDB node. You can find out how to do that "),o("RouterLink",{attrs:{to:"/nodes/credentials/CrateDB/"}},[e._v("here")]),e._v(".")],1),e._v(" "),o("li",[e._v("Select 'Execute Query' from the "),o("em",[o("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),o("li",[e._v("Enter the following SQL query in the "),o("em",[o("strong",[e._v("Query")])]),e._v(" field: "),o("code",[e._v("CREATE TABLE test (id INT, name STRING);")]),e._v(".")]),e._v(" "),o("li",[e._v("Click on the "),o("em",[o("strong",[e._v("Node")])]),e._v(" tab and toggle "),o("em",[o("strong",[e._v("Always Output Data")])]),e._v(" to true.")]),e._v(" "),o("li",[e._v("Click on "),o("em",[o("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),o("p",[o("img",{attrs:{src:a(873),alt:"Using the CreateDB node to create a table"}})]),e._v(" "),o("h3",{attrs:{id:"_3-set-node"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_3-set-node"}},[e._v("#")]),e._v(" 3. Set node")]),e._v(" "),o("ol",[o("li",[e._v("Click on the "),o("em",[o("strong",[e._v("Add Value")])]),e._v(" button and select 'Number' from the dropdown list.")]),e._v(" "),o("li",[e._v("Enter "),o("code",[e._v("id")]),e._v(" in the "),o("em",[o("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),o("li",[e._v("Click on the "),o("em",[o("strong",[e._v("Add Value")])]),e._v(" button and select 'String' from the dropdown list.")]),e._v(" "),o("li",[e._v("Enter "),o("code",[e._v("name")]),e._v(" in the "),o("em",[o("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),o("li",[e._v("Enter the value for the name in the "),o("em",[o("strong",[e._v("Value")])]),e._v(" field.")]),e._v(" "),o("li",[e._v("Click on "),o("em",[o("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),o("p",[o("img",{attrs:{src:a(874),alt:"Using the Set node to set data to be inserted by the CrateDB node"}})]),e._v(" "),o("h3",{attrs:{id:"_4-cratedb1-node-insert"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_4-cratedb1-node-insert"}},[e._v("#")]),e._v(" 4. CrateDB1 node (Insert)")]),e._v(" "),o("ol",[o("li",[e._v("Select the credentials that you entered in the previous CrateDB node.")]),e._v(" "),o("li",[e._v("Enter "),o("code",[e._v("test")]),e._v(" in the "),o("em",[o("strong",[e._v("Table")])]),e._v(" field.")]),e._v(" "),o("li",[e._v("Enter "),o("code",[e._v("id, name")]),e._v(" in the "),o("em",[o("strong",[e._v("Columns")])]),e._v(" field.")]),e._v(" "),o("li",[e._v("Click on "),o("em",[o("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),o("p",[o("img",{attrs:{src:a(875),alt:"Using the CrateDB node to insert data into a table"}})]),e._v(" "),o("h2",{attrs:{id:"faqs"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#faqs"}},[e._v("#")]),e._v(" FAQs")]),e._v(" "),o("h3",{attrs:{id:"how-to-specify-the-data-type-of-a-column"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-to-specify-the-data-type-of-a-column"}},[e._v("#")]),e._v(" How to specify the data type of a column?")]),e._v(" "),o("p",[e._v("To specify the data type of a column, append the column name with "),o("code",[e._v(":type")]),e._v(", where "),o("code",[e._v("type")]),e._v(" is the data type of that column. For example, if you want to specify the type "),o("code",[e._v("int")]),e._v(" for the column "),o("em",[e._v("id")]),e._v(" and type "),o("code",[e._v("text")]),e._v(" for the column "),o("em",[e._v("name")]),e._v(", you can use the following snippet in the "),o("em",[o("strong",[e._v("Columns")])]),e._v(" field: "),o("code",[e._v("id:init,name:text")]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"further-reading"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[e._v("#")]),e._v(" Further Reading")]),e._v(" "),o("FurtherReadingBlog")],1)}),[],!1,null,null,null);t.default=r.exports},872:function(e,t,a){e.exports=a.p+"assets/img/workflow.bb93d975.png"},873:function(e,t,a){e.exports=a.p+"assets/img/CrateDB_node.b14b5d55.png"},874:function(e,t,a){e.exports=a.p+"assets/img/Set_node.c133eece.png"},875:function(e,t,a){e.exports=a.p+"assets/img/CrateDB1_node.81da3b2a.png"}}]);