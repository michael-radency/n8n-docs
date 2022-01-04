(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1838:function(e,t,o){"use strict";o.r(t);var i=o(26),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"wait"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#wait"}},[e._v("#")]),e._v(" Wait")]),e._v(" "),i("p",[e._v("The Wait node is used to create a pause of any desired duration in your workflows. When the workflow is paused the execution data is offloaded to the database, and when the resume condition is met it is reloaded and the execution continues.")]),e._v(" "),i("p",[e._v("The Wait node can be set to resume on the following conditions:")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"#time-interval"}},[i("strong",[e._v("After time interval")])])]),e._v(" "),i("li",[i("a",{attrs:{href:"#specified-time"}},[i("strong",[e._v("At specified time")])])]),e._v(" "),i("li",[i("a",{attrs:{href:"#webhook-call"}},[i("strong",[e._v("On webhook call")])])])]),e._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[e._v("💡 Keep in mind")]),e._v(" "),i("p",[e._v("For the time-based resume operations, note that:")]),e._v(" "),i("ul",[i("li",[e._v("For wait times less than 65 seconds, execution data is not offloaded to the database to resume later but rather the process continues to run and execution resumes after the specified interval passes.")]),e._v(" "),i("li",[e._v("The n8n server time is always used regardless of the timezone setting. Workflow timezone settings, and any changes made to them, do not affect the Wait node interval or specified time.")])])]),e._v(" "),i("h2",{attrs:{id:"time-interval"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#time-interval"}},[e._v("#")]),e._v(" Time interval")]),e._v(" "),i("p",[e._v("Use the "),i("em",[i("strong",[e._v("After time interval")])]),e._v(" resume operation to set a desired interval after which the execution will resume.")]),e._v(" "),i("p",[e._v("Set the desired "),i("em",[e._v("Amount")]),e._v(" and the corresponding "),i("em",[e._v("Unit")]),e._v(" for the Wait operation. Decimals can be used for fractional units, for example "),i("code",[e._v("1.5")]),e._v(" minutes instead of "),i("code",[e._v("90")]),e._v(" seconds.")]),e._v(" "),i("p",[e._v("To automatically resume workflow execution after 15 minutes, the Wait node configuration would look like this:")]),e._v(" "),i("p",[i("img",{attrs:{src:o(736),alt:"Wait node time interval"}})]),e._v(" "),i("h2",{attrs:{id:"specified-time"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#specified-time"}},[e._v("#")]),e._v(" Specified time")]),e._v(" "),i("p",[e._v("Use the "),i("em",[i("strong",[e._v("At specified time")])]),e._v(" resume operation to set a particular date and time in the future when the workflow execution should resume.")]),e._v(" "),i("p",[e._v("For example, if you want the workflow execution to continue at midnight of New Year's Day 2022 the Wait node configuration would look like this:")]),e._v(" "),i("p",[i("img",{attrs:{src:o(737),alt:"Wait node specified time"}})]),e._v(" "),i("h2",{attrs:{id:"webhook-call"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#webhook-call"}},[e._v("#")]),e._v(" Webhook call")]),e._v(" "),i("p",[e._v("The resume "),i("strong",[e._v("On webhook call")]),e._v(" option enables your workflows to resume when an HTTP call is received.")]),e._v(" "),i("p",[e._v("The webhook URL that will resume the execution when called is only generated at runtime. The Wait node provides the "),i("code",[e._v("$resumeWebhookUrl")]),e._v(" variable so that you can reference and send (the yet to be generated URL) wherever needed, for example to a third-party service or in an email (see example below).")]),e._v(" "),i("p",[e._v("When the workflow executes, the resume URL is generated and the webhook(s) in your workflow using the "),i("code",[e._v("$resumeWebhookUrl")]),e._v(" reference become functional. This generated URL is unique to each execution, meaning that your workflow can contain multiple Wait nodes and as the webhook URL is called it will resume each Wait node sequentially.")]),e._v(" "),i("h3",{attrs:{id:"reference"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[e._v("#")]),e._v(" Reference")]),e._v(" "),i("p",[e._v("See the "),i("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Wait/Webhook/"}},[e._v("Webhook node")]),e._v(" documentation to learn more about the Authentication, Method, and Response parameters when configuring the Wait node to resume on a webhook call.")],1),e._v(" "),i("p",[e._v("In addition to the parameters shared with the Webhook mode, the Wait node has the following additional configuration options:")]),e._v(" "),i("ul",[i("li",[i("p",[i("strong",[e._v("Limit wait time")]),e._v(": Set the maximum amount of time to wait before the execution is resumed by default (i.e. even with no webhook call received).")])]),e._v(" "),i("li",[i("p",[i("strong",[e._v("Add Option")]),e._v(" > "),i("strong",[e._v("Webhook Suffix")]),e._v(": Provide a suffix that you want to appended to the resume URL. This is useful for creating unique webhook URLs for each Wait node when a workflow contains multiple Wait nodes.")]),e._v(" "),i("p",[i("strong",[e._v("Note")]),e._v(": The generated "),i("code",[e._v("$resumeWebhookUrl")]),e._v(" will not automatically include this suffix, you must manually append it to the webhook URL before exposing it.")])])]),e._v(" "),i("h3",{attrs:{id:"limitations"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#limitations"}},[e._v("#")]),e._v(" Limitations")]),e._v(" "),i("p",[e._v("There are a few functional limitations to keep in mind when working with the "),i("em",[e._v("On Webhook Call")]),e._v(" operations of the Wait node:")]),e._v(" "),i("ul",[i("li",[e._v("Partial executions of your workflow will change the "),i("code",[e._v("$resumeWebhookUrl")]),e._v(", so be sure that the node being used to send this URL to your desired third-party runs in the same execution as the Wait node.")]),e._v(" "),i("li",[e._v("When testing your workflow via the Editor UI, you cannot see the rest of the execution following the Wait node. To inspect the execution results ensure you have enabled "),i("em",[e._v("Save Manual Executions")]),e._v(" in you "),i("RouterLink",{attrs:{to:"/getting-started/key-components/workflow.html#workflow-settings"}},[e._v("workflow settings")]),e._v(" to be able to review the execution results there.")],1)]),e._v(" "),i("h2",{attrs:{id:"example-usage"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example usage")]),e._v(" "),i("p",[e._v("This workflow allows you to complete a user sign-up flow by adding their details contact details in an Airtable, sending a confirmation email, and updating the Airtable record after they have confirmed their email address.")]),e._v(" "),i("p",[e._v('For our example here, we assume there is an existing workflow/webpage where new users sign-up and this workflow begins when they hit "Submit" there.')]),e._v(" "),i("p",[e._v("This example workflow uses the following nodes.")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:""}},[e._v("Wait")])]),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Webhook/"}},[e._v("Webhook")])],1),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Set/"}},[e._v("Set")])],1),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/SendEmail/"}},[e._v("Send Email")])],1),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/Airtable/"}},[e._v("Airtable")])],1)]),e._v(" "),i("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),i("p",[i("img",{attrs:{src:o(738),alt:"A workflow with the Wait node"}})]),e._v(" "),i("h3",{attrs:{id:"_1-webhook-node"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_1-webhook-node"}},[e._v("#")]),e._v(" 1. Webhook node")]),e._v(" "),i("p",[e._v("This node is triggered when a new user submits their details in your contact form. It is configured as displayed below:")]),e._v(" "),i("p",[i("img",{attrs:{src:o(739),alt:"Submit Webhook node configuration"}})]),e._v(" "),i("h3",{attrs:{id:"_2-set-node"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_2-set-node"}},[e._v("#")]),e._v(" 2. Set node")]),e._v(" "),i("p",[e._v("This node is used to set the values submitted by the user (first name, last name, and email address) as values corresponding to what you want to enter in the Airtable.")]),e._v(" "),i("p",[i("img",{attrs:{src:o(740),alt:"Set node configuration"}})]),e._v(" "),i("p",[e._v("Note that expressions are used based on the input data received from the previous Webhook node:")]),e._v(" "),i("p",[i("img",{attrs:{src:o(741),alt:"Set node expression"}})]),e._v(" "),i("h3",{attrs:{id:"_3-airtable-node"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-airtable-node"}},[e._v("#")]),e._v(" 3. Airtable node")]),e._v(" "),i("p",[e._v("In this node we add the new users contact details to the desired table, Newsletter in our example:")]),e._v(" "),i("p",[i("img",{attrs:{src:o(742),alt:"Airtable node configuration"}})]),e._v(" "),i("h3",{attrs:{id:"_4-send-email-node"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_4-send-email-node"}},[e._v("#")]),e._v(" 4. Send Email node")]),e._v(" "),i("p",[e._v("This node uses your desired email address (via SMTP) to send a confirmation email to the user:")]),e._v(" "),i("p",[i("img",{attrs:{src:o(743),alt:"Send Email node configuration"}})]),e._v(" "),i("p",[e._v("This is where the "),i("code",[e._v("$resumeWebhookUrl")]),e._v(" is passed, meaning the workflow will wait until the user clicks the confirmation link in this email before resuming execution:")]),e._v(" "),i("p",[i("img",{attrs:{src:o(744),alt:"Send Email expression configuration"}})]),e._v(" "),i("h3",{attrs:{id:"_5-wait-node"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_5-wait-node"}},[e._v("#")]),e._v(" 5. Wait node")]),e._v(" "),i("p",[e._v("The Wait node will resume execution once the new user clicks the confirmation link in their email (containing the "),i("code",[e._v("$resumeWebhookUrl")]),e._v("):")]),e._v(" "),i("p",[i("img",{attrs:{src:o(745),alt:"Wait node"}})]),e._v(" "),i("h3",{attrs:{id:"_6-set-node"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_6-set-node"}},[e._v("#")]),e._v(" 6. Set node")]),e._v(" "),i("p",[e._v("In this node set the "),i("code",[e._v("id")]),e._v(" of the user and new "),i("strong",[e._v("Verified")]),e._v(" boolean value to true:")]),e._v(" "),i("p",[i("img",{attrs:{src:o(746),alt:"Set node 2"}})]),e._v(" "),i("h3",{attrs:{id:"_7-airtable-node"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_7-airtable-node"}},[e._v("#")]),e._v(" 7. Airtable node")]),e._v(" "),i("p",[e._v("Finally you update the table to reflect this newly created "),i("em",[e._v("Verified")]),e._v(" field:")]),e._v(" "),i("p",[i("img",{attrs:{src:o(747),alt:"Airtable node configuration"}})])])}),[],!1,null,null,null);t.default=a.exports},736:function(e,t,o){e.exports=o.p+"assets/img/wait_time_interval.6667b3a1.png"},737:function(e,t,o){e.exports=o.p+"assets/img/wait_specific_time.843e47d3.png"},738:function(e,t,o){e.exports=o.p+"assets/img/workflow.b27b291f.png"},739:function(e,t,o){e.exports=o.p+"assets/img/webhook_node_1.13a79fab.png"},740:function(e,t,o){e.exports=o.p+"assets/img/set_node_1.aa94acc4.png"},741:function(e,t,o){e.exports=o.p+"assets/img/set_node_expression.66132998.png"},742:function(e,t,o){e.exports=o.p+"assets/img/airtable_node_1.3437b006.png"},743:function(e,t,o){e.exports=o.p+"assets/img/email_node_1.2e78b51f.png"},744:function(e,t,o){e.exports=o.p+"assets/img/email_node_2.5f09f37d.png"},745:function(e,t,o){e.exports=o.p+"assets/img/wait_node.6dc2c2e9.png"},746:function(e,t,o){e.exports=o.p+"assets/img/set_node_2.a050ee39.png"},747:function(e,t,o){e.exports=o.p+"assets/img/airtable_node_2.a8d27b79.png"}}]);