[1mdiff --git a/.vs/ResponsiveWebClient/FileContentIndex/16f18b13-7ca3-4abd-ad88-e9d9f269f85a.vsidx b/.vs/ResponsiveWebClient/FileContentIndex/16f18b13-7ca3-4abd-ad88-e9d9f269f85a.vsidx[m
[1mdeleted file mode 100644[m
[1mindex 5b3351c..0000000[m
Binary files a/.vs/ResponsiveWebClient/FileContentIndex/16f18b13-7ca3-4abd-ad88-e9d9f269f85a.vsidx and /dev/null differ
[1mdiff --git a/.vs/ResponsiveWebClient/FileContentIndex/7a0518a2-c44c-460d-b7fd-33b81dc72d87.vsidx b/.vs/ResponsiveWebClient/FileContentIndex/7a0518a2-c44c-460d-b7fd-33b81dc72d87.vsidx[m
[1mdeleted file mode 100644[m
[1mindex 7c1b6e3..0000000[m
Binary files a/.vs/ResponsiveWebClient/FileContentIndex/7a0518a2-c44c-460d-b7fd-33b81dc72d87.vsidx and /dev/null differ
[1mdiff --git a/.vs/ResponsiveWebClient/FileContentIndex/c04376d5-72ae-4bdd-99de-d48a329f2759.vsidx b/.vs/ResponsiveWebClient/FileContentIndex/c04376d5-72ae-4bdd-99de-d48a329f2759.vsidx[m
[1mdeleted file mode 100644[m
[1mindex 15726a8..0000000[m
Binary files a/.vs/ResponsiveWebClient/FileContentIndex/c04376d5-72ae-4bdd-99de-d48a329f2759.vsidx and /dev/null differ
[1mdiff --git a/.vs/ResponsiveWebClient/FileContentIndex/f7ef908b-d000-40c6-9155-038c7d8db36e.vsidx b/.vs/ResponsiveWebClient/FileContentIndex/f7ef908b-d000-40c6-9155-038c7d8db36e.vsidx[m
[1mdeleted file mode 100644[m
[1mindex 4527988..0000000[m
Binary files a/.vs/ResponsiveWebClient/FileContentIndex/f7ef908b-d000-40c6-9155-038c7d8db36e.vsidx and /dev/null differ
[1mdiff --git a/.vs/ResponsiveWebClient/v17/.wsuo b/.vs/ResponsiveWebClient/v17/.wsuo[m
[1mindex 1702181..49c8403 100644[m
Binary files a/.vs/ResponsiveWebClient/v17/.wsuo and b/.vs/ResponsiveWebClient/v17/.wsuo differ
[1mdiff --git a/.vs/slnx.sqlite b/.vs/slnx.sqlite[m
[1mindex e29d0cb..0b50099 100644[m
Binary files a/.vs/slnx.sqlite and b/.vs/slnx.sqlite differ
[1mdiff --git a/JavaScripts/GlobalsWebClient.js b/JavaScripts/GlobalsWebClient.js[m
[1mindex 3f4650f..906cca1 100644[m
[1m--- a/JavaScripts/GlobalsWebClient.js[m
[1m+++ b/JavaScripts/GlobalsWebClient.js[m
[36m@@ -16,9 +16,9 @@[m [mvar GlobalWebClientModule = (function () {[m
 [m
     // User Registration Data[m
 [m
[31m-    var userRegistrationData_InputIds = ["UserType", "Name", "Email", "Address", "Password", "Repeat-Password"];[m
[31m-    var userRegistrationData_Keys = ["UserId", "UserType", "Name", "Email", "Address", "Password", "Repeat-Password"];[m
[31m-    var userRegistrationData_RequiredKeys = ["UserId", "UserType", "Name", "Email", "Address", "Password"];[m
[32m+[m[32m    var userRegistrationData_InputIds = ["CompanyName", "ProjectName", "UserType", "UserName", "Email", "Address", "Password", "Repeat-Password"];[m[41m[m
[32m+[m[32m    var userRegistrationData_Keys = ["UserId", "CompanyName", "ProjectName", "UserType", "UserName", "Email", "Address", "Password", "Repeat-Password"];[m[41m[m
[32m+[m[32m    var userRegistrationData_RequiredKeys = ["CompanyName", "ProjectName", "UserId", "UserType", "UserName", "Email", "Address", "Password"];[m[41m[m
 [m
     // User Authentication Data[m
 [m
[36m@@ -26,7 +26,11 @@[m [mvar GlobalWebClientModule = (function () {[m
     var userAuthenticationData_Keys = ["Email", "Password"];[m
     var userAuthenticationData_RequiredKeys = ["Email", "Password"];[m
 [m
[32m+[m[32m    // Company Registration Data[m[41m[m
 [m
[32m+[m[32m    var companyRegistrationData_InputIds = ["CompanyName", "ProjectName", "Email"];[m[41m[m
[32m+[m[32m    var companyRegistrationData_Keys = ["CompanyId", "CompanyName", "ProjectName", "Email"];[m[41m[m
[32m+[m[32m    var companyRegistrationData_RequiredKeys = ["CompanyName", "ProjectName", "CompanyId", "Email"];[m[41m[m
 [m
 [m
     // House Structure Form Input Data[m
[36m@@ -198,6 +202,9 @@[m [mvar GlobalWebClientModule = (function () {[m
         userAuthenticationData_Keys: userAuthenticationData_Keys,[m
         userAuthenticationData_RequiredKeys: userAuthenticationData_RequiredKeys,[m
 [m
[32m+[m[32m        companyRegistrationData_InputIds: companyRegistrationData_InputIds,[m[41m[m
[32m+[m[32m        companyRegistrationData_Keys: companyRegistrationData_Keys,[m[41m[m
[32m+[m[32m        companyRegistrationData_RequiredKeys: companyRegistrationData_RequiredKeys,[m[41m[m
 [m
 [m
 [m
[1mdiff --git a/JavaScripts/UserRegistration.js b/JavaScripts/UserRegistration.js[m
[1mindex 4e04127..ac9592f 100644[m
[1m--- a/JavaScripts/UserRegistration.js[m
[1m+++ b/JavaScripts/UserRegistration.js[m
[36m@@ -58,7 +58,10 @@[m [mvar UserRegistrationModule = (function () {[m
 [m
     function postUserSignup_SuccessCallback(webReqResponse) {[m
 [m
[31m-        alert("User Registration was successful : " + webReqResponse);[m
[32m+[m[32m        alert("User Registration was successful : Now adding company record with project details.." + webReqResponse);[m[41m[m
[32m+[m[41m[m
[32m+[m[32m        CompanyRegistrationModule.companyRegistration();[m[41m[m
[32m+[m[41m[m
         document.location.replace("./HomePage.html");[m
     }[m
 [m
[1mdiff --git a/SignUpPage.html b/SignUpPage.html[m
[1mindex e9d973a..81cbf96 100644[m
[1m--- a/SignUpPage.html[m
[1m+++ b/SignUpPage.html[m
[36m@@ -36,6 +36,7 @@[m
     <script src="./JavaScripts/FormDataInputHelperUtils.js"></script>[m
     <script src="./JavaScripts/GlobalsWebClient.js"></script>[m
     <script src="./JavaScripts/WebClientRequestHelperUtils.js"></script>[m
[32m+[m[32m    <script src="./JavaScripts/CompanyRegistration.js"></script>[m[41m[m
 [m
     <nav id="headerNav" class="navbar navbar-inverse ">[m
 [m
[36m@@ -104,6 +105,34 @@[m
 [m
                 <form class="form-horizontal" style="align-items: center;" name="details">[m
 [m
[32m+[m[32m                    <div class="form-group">[m[41m[m
[32m+[m[41m[m
[32m+[m[32m                        <label class="control-label col-sm-3" for="CompanyName">Company Name</label>[m[41m[m
[32m+[m[41m[m
[32m+[m[32m                        <div class="col-sm-7">[m[41m[m
[32m+[m[41m[m
[32m+[m[32m                            <input type="text" class="form-control" id="CompanyName" placeholder="enter company name" name="Company Name" required>[m[41m[m
[32m+[m[41m[m
[32m+[m[32m                        </div>[m[41m[m
[32m+[m[41m[m
[32m+[m[32m                    </div>[m[41m[m
[32m+[m[41m[m
[32m+[m[32m                    <div style="padding-bottom: 20px"></div>[m[41m[m
[32m+[m[41m[m
[32m+[m[32m                    <div class="form-group">[m[41m[m
[32m+[m[41m[m
[32m+[m[32m                        <label class="control-label col-sm-3" for="ProjectName">Project Name</label>[m[41m[m
[32m+[m[41m[m
[32m+[m[32m                        <div class="col-sm-7">[m[41m[m
[32m+[m[41m[m
[32m+[m[32m                            <input type="text" class="form-control" id="ProjectName" placeholder="enter project name" name="Project Name" required>[m[41m[m
[32m+[m[41m[m
[32m+[m[32m                        </div>[m[41m[m
[32m+[m[41m[m
[32m+[m[32m                    </div>[m[41m[m
[32m+[m[41m[m
[32m+[m[32m                    <div style="padding-bottom: 20px"></div>[m[41m[m
[32m+[m[41m[m
                     <div class="form-group">[m
 [m
                         <label class="control-label col-sm-3" for=UserType>UserType</label>[m
[36m@@ -126,11 +155,11 @@[m
 [m
                     <div class="form-group">[m
 [m
[31m-                        <label class="control-label col-sm-3" for="Name">Name</label>[m
[32m+[m[32m                        <label class="control-label col-sm-3" for="UserName">User Name</label>[m[41m[m
 [m
                         <div class="col-sm-7">[m
 [m
[31m-                            <input type="text" class="form-control" id="Name" placeholder="enter full name" name="Name" required>[m
[32m+[m[32m                            <input type="text" class="form-control" id="UserName" placeholder="enter user name" name="User Name" required>[m[41m[m
 [m
                         </div>[m
 [m
