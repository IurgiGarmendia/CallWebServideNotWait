<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">


    <%--https://www.c-sharpcorner.com/UploadFile/dacca2/web-api-with-ajax-understand-formbody-and-formuri-attribute/--%>
     <script>  
         $(document).ready(function () {
             
             $("#Save").click(function () {  
                 $.ajax({  
                     url: 'http://localhost:52610/api/SP',  
                     type: 'POST',  
                     dataType: 'json',  
                     //data:{"":"Sourav Kayal"},  
                     //data: { "": ind },
                     //data: { Name: "<%=this.Name%>", Credits: "<%=this.Credits%>" },
                     data: { "": "<%=this.Name%>"+"-"+ "<%=this.Credits%>" },
                     success: function (data, textStatus, xhr) {  
                         console.log(data);  
                     },  
                     error: function (xhr, textStatus, errorThrown) {  
                         console.log('Error in Operation');  
                         
                     }  
                 });  
             });  
         });  
    </script>  
    <script type="text/javascript">
        function JqueryAjaxCall(izena) {
            $.ajax({  
                     url: 'http://intranetsrv/MailServices/Api/MailNotification',  
                type: 'POST',  
                     crossDomain: true,
                     dataType: 'json',  
                     //data:{"":"Sourav Kayal"},  
                     //data: { "": ind },
                //data: { Name: "<%=this.Name%>", Credits: "<%=this.Credits%>" },
                data: { "":  izena },
                     success: function (data, textStatus, xhr) {  
                         console.log(data);
                         alert("Egina!");
                     },  
                     error: function (xhr, textStatus, errorThrown) {  
                         console.log('Error in Operation');  
                         alert("Arazo bat dago!");
                     }  
                 });  
        }

    </script>

 

    <div class="jumbotron">
        <h1>ASP.NET</h1>
        <p class="lead">ASP.NET is a free web framework for building great Web sites and Web applications using HTML, CSS, and JavaScript.</p>
        <p><a href="http://www.asp.net" class="btn btn-primary btn-lg">Learn more &raquo;</a>
            <asp:Button ID="Button1" runat="server" Text="Button" OnClick="Button1_Click1" />
        </p>
        <input type="button" id="Save" value="Save Data" /> 
    </div>

    <div class="row">
        <div class="col-md-4">
            <h2>Getting startedusing a familiar drag-and-drop, event-driven model.
            A design surface and hundreds of controls and components let you rapidly build sophisticated, powerful UI-driven sites with data access.
            </p>
            <p>
                <a class="btn btn-default" href="https://go.microsoft.com/fwlink/?LinkId=301948">Learn more &raquo;</a>
            </p>
        </div>
        <div class="col-md-4">
            <h2>Get more libraries</h2>
            <p>
                NuGet is a free Visual Studio extension that makes it easy to add, remove, and update libraries and tools in Visual Studio projects.
            </p>
            <p>
                <a class="btn btn-default" href="https://go.microsoft.com/fwlink/?LinkId=301949">Learn more &raquo;</a>
            </p>
        </div>
        <div class="col-md-4">
            <h2>Web Hosting</h2>
            <p>
                You can easily find a web hosting company that offers the right mix of features and price for your applications.
            </p>
            <p>
                <a class="btn btn-default" href="https://go.microsoft.com/fwlink/?LinkId=301950">Learn more &raquo;</a>
            </p>
        </div>
    </div>
</asp:Content>
