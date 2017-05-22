//分页类
function Pagination(users) {
    this.settings = {
        id:null,
        total:21,
        showButtons:6,
        callback:null
    }
    this.cur = 1;
    for(var attr in users){
        this.settings[attr] = users[attr]
    }
    this.settings.id = document.getElementById(this.settings.id);
    this.render();
}
Pagination.prototype.doInit = function(index,cur){
    index= index||0;
    cur = cur||0;
    var html = "";
    var first="<ul class='pagination_page_list'>";
    var showButtons = this.settings.showButtons;
    var total = this.settings.total;
    var pages = showButtons>=total?total:showButtons;
    for(var i = index,lens = pages+index;i<lens;i++){
        if(i===cur){
            html+="<li><a class='active' href='javascript:;'>"+(i+1)+"</a></li>"
        }else{
            html+="<li><a href='javascript:;'>"+(i+1)+"</a></li>"
        }
    }
    if(cur ===0&&total>showButtons){
        return first+html+"<li><span id='next'>下一页</span></li></ul>";
    }
    else if(cur === this.settings.total-1 &&total>showButtons){
        return  first + "<li><span id='prev'>上一页</span></li>" + html;
    }
    else if(showButtons>=total){
        return first+html;
    }
    return first+"<li><span id='prev'>上一页</span></li>"+html+"<li><span id='next'>下一页</span></li></ul>"
}
Pagination.prototype.render = function () {
    var self = this;
    this.settings.id.innerHTML = this.doInit();
    this.settings.id.onclick = function (e) {
        e = e || window.event;
        self.handle(e)
    };
}
Pagination.prototype.handle = function(e){
    var target = e.target||e.srcElement;
    if(target.className==="active"){
        return false;
    }
    var pageList = this.settings.id;
    var items = pageList.querySelectorAll('a');
    var len = items.length;
    var end = items[len-1].innerHTML; // 最后一个按钮的页码
    var num = Number(target.innerHTML);
    this.cur = num ? num : this.cur;
    var cur = this.cur;
    var total = this.settings.total;
    var pages = this.settings.showButtons;
    if(target.id!=="prev"&&target.id!=="next"){
        //right
        if((cur===end-1&&cur!==total-1)||(cur===end &&cur===total-1)){
            pageList.innerHTML = this.doInit(end-(len-1),cur-1);
        }
        else if((cur===end&&cur!==total)){
            pageList.innerHTML= this.doInit(end-(len-2), cur-1);
        }
        //left
        else if (cur === end - (len-1) && cur > 2) {
            pageList.innerHTML = this.doInit(end-(len+2), cur-1);
        }
        else if ((cur === end - (len-2) && cur !== 2) || (cur === end-(len-1) && cur === 2)) {
            pageList.innerHTML = this.doInit(end-(len+1), cur-1);
        }
        else {
            // if (total > pages) {
            //     for (var i = 0; i < len; i++) {
            //         items[i].className = '';
            //     }
            //     e.target.className = 'active';
            //     // pageList.innerHTML = this.doInit(end-pages, cur-1);
            // }
            // else {
            for (var i = 0; i < len; i++) {
                items[i].className = '';
            }
            e.target.className = 'active';
            // }
        }
    }
    if(target.id==='prev'){
        this.cur --;
        if (this.cur < end-(len-3) && this.cur > 2) {
            end --;
        }
        pageList.innerHTML = this.doInit(end-pages, this.cur-1);
    }
    if(target.id==='next'){
        this.cur ++;
        if (this.cur > end-2 && this.cur < total-1) {
            end ++;
        }
        pageList.innerHTML= this.doInit(end-pages, this.cur-1);
    }
    this.settings.callback && this.settings.callback(this.cur);
}