
function callAjaxMethod(offer, rowindex) {
    $.ajax({
        type: "POST",
        url: "http://localhost:52610/api/SP",
        data: { "": "Sourav Kayal" }, 
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data, textStatus, xhr) {
           
            //document.getElementById("lblOferta").innerHTML = offer;
            //document.getElementById('hdfOffer').value = offer;
            //document.getElementById('hdfOfferRowindex').value = rowindex;
            //datuakBete(response.d);
            //$("topopup").click();
            //$("#toPopup").show();
            //$("#backgroundPopup").show();
            //$("#backgroundPopup").css("opacity", "0.7");
            //document.getElementById('txtComercialNota').focus();
        },
    });
}

function datuakBete(datuak) {
    var xmlDoc = $.parseXML(datuak);
    var xml = $(xmlDoc);
    var product = xml.find("Table");
    document.getElementById("tblNota").innerHTML = "";
    var tblRow = '';
    var user = document.getElementById('hdfUser').value;
   
   
    $.each(product, function () {
        var oDate = new Date($(this).find("Date").text());
       //Change date Formate dd/mm/yyyy
        var dd = oDate.getDate();
        var mm = oDate.getMonth() + 1;

        var yyyy = oDate.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        var Offerdate = dd + '/' + mm + '/' + yyyy; 
        if ($(this).find("usr").text() === user) {
            tblRow += '<li class="current-msg-list"><span class="msg-text"><span class="msg-name"><span class="left">' + $(this).find("usr").text() + ' </span><span class="right">' + Offerdate + '</span></span>' + $(this).find("Notes").text() + '</span></li>';
        }
        else {
            tblRow += '<li class="old-msg-list"><span class="msg-text"><span class="msg-name"><span class="left">' + $(this).find("usr").text() + ' </span><span class="right">' + Offerdate + '</span></span>' + $(this).find("Notes").text() + '</span></li>';
        }
    });
    $("#tblNota").append(tblRow);
}

$(document).ready(function () {
    $(".popup-closed").click(function () {
        $("#toPopup").fadeOut();
        $("#backgroundPopup").fadeOut();
        document.getElementById('txtComercialNota').value = '';
        document.getElementById('hdfOffer').value = '';
        document.getElementById('hdfOfferRowindex').value = '';
    });
});

function callAjaxInsertNota() {
    var offer = document.getElementById('hdfOffer').value;
    var note = document.getElementById('txtComercialNota').value;
    $.ajax({
        type: "POST",
        url: "Comercial.aspx/InsertNota",
        data: "{'offer':'" + offer + "', 'note':'" + note + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            if (response.d) {
                var rowindex = parseInt(document.getElementById('hdfOfferRowindex').value);
                var txtNota = document.getElementById('txtComercialNota');
                Binddata(offer);
                var custompopup = document.getElementById("msg");
                custompopup.scrollTop = custompopup.scrollHeight;
                if (txtNota.value != "") {
                    var imgid = "gvCommercial_cell" + rowindex + "_13_imgNota_" + rowindex;//Priority image id
                    var imgsrc = document.getElementById(imgid).src;
                    if (imgsrc.includes("NotaNot.png")) {
                        document.getElementById(imgid).src = "siteimage/Nota.png";
                    }                   
                }
                else {
                    txtNota.focus();
                }
                txtNota.value = "";
            }
        },
    });
}

function Binddata(offer) {
    $.ajax({
        type: "POST",
        url: "Comercial.aspx/GetNota",
        data: "{offer:" + offer + "}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            if (response.d) {
                datuakBete(response.d);
            }
        },
    });
}

function GetComercialComments(offer, rowindex) {
    $.ajax({
        type: "POST",
        url: "Comercial.aspx/GetComercialComments",
        data: "{offer:" + offer + "}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            document.getElementById("lblOfertaComments").innerHTML = offer;
            document.getElementById('hdfOfferID').value = offer;
            document.getElementById('hdfOfferRowindexID').value = rowindex;
            GetAllDataForComercialComments(response.d);
            $("CommPop").click();
            $("#commentsPopup").show();
            $("#backgroundPopup").show();
            $("#backgroundPopup").css("opacity", "0.7");
            document.getElementById('txtComercialComments').focus();
        },
    });
}

function callAjaxInsertComments() {
    var offer = document.getElementById('hdfOfferID').value;
    var comments = document.getElementById('txtComercialComments').value;
    if (comments.length > 0) {
        $.ajax({
            type: "POST",
            url: "Comercial.aspx/InsertComments",
            data: "{'offer':'" + offer + "', 'comments':'" + comments + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                if (response.d) {
                    var rowindex = parseInt(document.getElementById('hdfOfferRowindexID').value);
                    var txtComments = document.getElementById('txtComercialComments');
                    BindComments(offer);
                    if (txtComments.value != "") {
                        var imgid = "gvCommercial_cell" + rowindex + "_14_imgCommentaire_" + rowindex;//Priority image id
                        var imgsrc = document.getElementById(imgid).src;
                        if (imgsrc.includes("CommentNot.png")) {
                            document.getElementById(imgid).src = "siteimage/Comment.png";
                        }
                    }
                    else {
                        txtComments.focus();
                    }
                    txtComments.value = "";
                }
            },
        });
    }
}

function BindComments(offer) {
    $.ajax({
        type: "POST",
        url: "Comercial.aspx/GetComercialComments",
        data: "{offer:" + offer + "}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            if (response.d) {
                GetAllDataForComercialComments(response.d);
            }
        },
    });
}



function GetAllDataForComercialComments(datuak) {
    var xmlDoc = $.parseXML(datuak);
    var xml = $(xmlDoc);
    var product = xml.find("Table");
    document.getElementById('txtComercialComments').value = '';
    if (product.length > 0) {
        $.each(product, function () {
            document.getElementById('txtComercialComments').value = $(this).find("Comments").text();
        });
    }

}

function UpdatePriority(offer, rowindex) {
    var priority = "0";
    var imgid = "gvCommercial_cell" + rowindex + "_11_imgPriority_" + rowindex;//Priority image id
    var imgsrc = document.getElementById(imgid).src;
    if (imgsrc.includes("PriorityNot.png"))
        priority = "1";
    $.ajax({
        type: "POST",
        url: "Comercial.aspx/UpdatePriority",
        data: "{offer:" + offer + ", 'strPriority':" + priority + "}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            if (response.d) {
                if (imgsrc.includes("PriorityNot.png"))
                    document.getElementById(imgid).src = "siteimage/Priority.png";
                else
                    document.getElementById(imgid).src = "siteimage/PriorityNot.png";
            }
        },
    });
}
