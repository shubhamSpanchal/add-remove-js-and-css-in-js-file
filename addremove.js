 function removejsfile(filename, filetype){
     var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none" 
     var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none" 
     var allsuspects=document.getElementsByTagName(targetelement)
     for (var i=allsuspects.length; i>=0; i--){ 
     if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1)
         allsuspects[i].parentNode.removeChild(allsuspects[i]) 
     }
 }
 
 removejsfile("assets/Datatable/DataTables_JS/jquery.dataTables.min.js", "js") 
 removejsfile("assets/Datatable/DataTables_JS/dataTables.buttons.min.js", "js")
 removejsfile("assets/Datatable/DataTables_JS/dataTables.fixedHeader.min.js", "js")
 removejsfile("assets/Datatable/DataTables_JS/buttons.html5.min.js", "js")

function callAll(jsfiles) {
    var src = document.createElement("script");
    src.setAttribute("type", "text/javascript");
    src.setAttribute("src", jsfiles);
    document.getElementsByTagName("head")[0].appendChild(src);
 }
 callAll("https://cdn.datatables.net/1.10.25/js/jquery.dataTables.min.js");
 callAll("https://cdn.datatables.net/buttons/1.7.1/js/dataTables.buttons.min.js");
 callAll("assets/Datatable/DataTables_JS/jszip.min.js");
 callAll("assets/Datatable/DataTables_JS/pdfmake.min.js");
 callAll("assets/Datatable/DataTables_JS/vfs_fonts.js");
 callAll("https://cdn.datatables.net/buttons/1.7.1/js/buttons.html5.min.js");
