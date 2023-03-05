$(function() {
    $.contextMenu({
        selector: '.card .tc-And,.card .tc-Or', 
        callback: function(key, options) {
            contextMenu(key,options);
        },
        items: {
            "And": {name: "Thêm {And}", icon: "fa-object-group"},
            "Or": {name: "Thêm [Or]", icon: "fa-object-ungroup"},
            "sep1": "---------",
            "Sum": {name: "Thêm Sum()", icon: "fa-ravelry"},
            "Less": {name: "Thêm Less()", icon: "fa-braille"},
            "sep2": "---------",
            "Activity": {name: "Thêm hoạt động", icon: "fa-free-code-camp"},
            "sep3": "---------",
            "Del": {name: "Xóa tiêu chí", icon: "fa-remove"},
        }
    });

    $.contextMenu({
        selector: '.tab-pane>.tc-And,.tab-pane>.tc-Or,.tab-pane>.tc-Priority', 
        callback: function(key, options) {
            contextMenu(key,options);
        },
        items: {
            "And": {name: "Thêm {And}", icon: "fa-object-group"},
            "Or": {name: "Thêm [Or]", icon: "fa-object-ungroup"},
            "sep1": "---------",
            "Sum": {name: "Thêm Sum()", icon: "fa-ravelry"},
            "Less": {name: "Thêm Less()", icon: "fa-braille"},
            "sep2": "---------",
            "Activity": {name: "Thêm hoạt động", icon: "fa-free-code-camp"},
        }
    });

    $.contextMenu({
        selector: '.tc-Less', 
        callback: function(key, options) {
            contextMenu(key,options);
        },
        items: {
            "And": {name: "Thêm {And}", icon: "fa-object-group"},
            "Or": {name: "Thêm [Or]", icon: "fa-object-ungroup"},
            "sep1": "---------",
            "Activity": {name: "Thêm hoạt động", icon: "fa-free-code-camp"},
            "sep2": "---------",
            "Del": {name: "Xóa tiêu chí", icon: "fa-remove"},
        }
    });

    $.contextMenu({
        selector: '.tc-Sum', 
        callback: function(key, options) {
            contextMenu(key,options);
        },
        items: {
            "Activity": {name: "Thêm hoạt động", icon: "fa-free-code-camp"},
            "sep1": "---------",
            "Del": {name: "Xóa tiêu chí", icon: "fa-remove"},
        }
    });

    $.contextMenu({
        selector: '.tc', 
        callback: function(key, options) {
            contextMenu(key,options);
        },
        items: {
            "Del": {name: "Xóa hoạt động", icon: "fa-remove"},
        }
    });

    function contextMenu(key, options){
        switch(key){
            case "And": case "Or": case "Sum": case "Less":
                options.$trigger.children('.card-body').append(addTC(key));
            break;
            case "Del":
                options.$trigger.remove();
            break;
            case "Activity":
                options.$trigger.children('.card-body').append(addActivity());
            break;
        }
    }

    function addTC(tc){
        html ='<div class="card tc-'+tc+'">';
            html+='<div class="card-header">// Nhấp đúp để sửa tiêu đề</div>';
            html+='<div class="card-body">';
                html+='';
            html+='</div>';
        html+='</div>';
        return html;
    }

    function addActivity(){
        html ='<div class="card tc" data-score="1">';
            html+='<div class="card-body">';
                html+='{Nhấn đúp để chọn hoạt động}';
            html+='</div>';
        html+='</div>';
        return html;
    }

    //Sửa tiêu đề các tiêu chí
    $(document).delegate('.card .card>.card-header','dblclick',function(e){
        text = $(this).text().trim();
        $(this).html('<input type="text" value="'+text+'">');
        $('.card input').select();
    });

    $(document).delegate('.card-header input','focusout',function(e){
        text = $('.card-header input').val().trim();
        if(text==''){text='// Nhấp đúp để sửa tiêu đề'}
        $('.card-header input').before(text).remove();
    });

    //Sửa hoạt động
    previousAct='';
    previousActId='';
    $(document).delegate('.tc>.card-body','dblclick',function(e){
        $('#activity-list .container div').show();
        text = $(this).text().trim();
        $(this).html('<input type="text" value="'+text+'">');
        $('.tc .card-body input').select();
        $( "#activity-list").show().position({
            my: "center top",
            at: "center bottom",
            of: ".tc .card-body input"
        });
        previousAct=$('.tc .card-body input').val().trim();
        previousActId=$(this).parents('.tc').attr('data-id');
    });

    $(document).delegate('.tc>.card-body','focusout',function(e){
        $( "#activity-list").hide();
        text = $('.tc .card-body input').val().trim();
        if(text==''){text='{Nhấn đúp để chọn hoạt động}'}
        $('.tc .card-body input').before(text).remove();
    });

    $(document).delegate('.tc .card-body input','input',function(e){
        keyword=tiengViet($('.tc .card-body input').val().trim().toLowerCase());
        previousAct=$('.tc .card-body input').val().trim();
        if(keyword!='{Nhấn đúp để chọn hoạt động}'){
            $('#activity-list .container div').each(function(ee){
                if(tiengViet($(this).text()).toLowerCase().indexOf(keyword)<0){
                    $(this).hide();
                }else{
                    $(this).show();
                }
            });
        }else{
            $('#activity-list .container div').show();
        }
    });

    //Chọn hoạt động
    $(document).delegate('#activity-list .container div','click',function(e){
        previousAct=$(this).text();
        previousActId=$(this).attr('data-id');
    });

    $(document).delegate('#activity-list .container div','mouseover',function(e){
        $('.tc .card-body input').val($(this).text());
        $('.tc .card-body input').parents('.tc').attr('data-id',$(this).attr('data-id'));
    });

    $(document).delegate('#activity-list .container div','mouseout',function(e){
        $('.tc .card-body input').val(previousAct);
        $('.tc .card-body input').parents('.tc').attr('data-id',previousActId);
    });

    //Sửa điểm hoạt động
    $(document).delegate('.tc','dblclick',function(e){
        if(($('body').width()/2)<e.clientX){
            text = $(this).attr('data-score').replace(/[^0-9.]/g,'');
            if(text=='' || text==undefined){text='1'}
            $(this).append('<input type="text" value="'+text+'" placeholder=">=">');
            $('.tc>input').select();
        }
    });

    $(document).delegate('.tc','focusout',function(e){
        if($('.tc>input').length>0){
            text=$('.tc>input').val().replace(/[^0-9.]/g,'');
            if(text=='' || text==undefined){text='1'}
            $(this).attr('data-score',text);
            $('.tc>input').remove();
        }
    });
    
    //Di chuyển hoạt động
    $(document).delegate('.card .card','click',function(e){
        if(e.ctrlKey){
            if($('.tcSelect').length>0){
                if(!$(this).hasClass('tcSelect')){
                    $('.tcSelect').insertBefore($(this));
                }
                $('.tcSelect').removeClass('tcSelect')
            }else{
                $(this).addClass('tcSelect');
            }
        }
    });

    function tiengViet(text){
        return text=text.replace(/ /g,"-").replace(/[--]/g,"-").replace(/á/gi,"a").replace(/à/gi,"a").replace(/ả/gi,"a").replace(/ã/gi,"a").replace(/ạ/gi,"a").replace(/ă/gi,"a").replace(/ắ/gi,"a").replace(/ằ/gi,"a").replace(/ẳ/gi,"a").replace(/ẵ/gi,"a").replace(/ặ/gi,"a").replace(/â/gi,"a").replace(/ấ/gi,"a").replace(/ầ/gi,"a").replace(/ẩ/gi,"a").replace(/ẫ/gi,"a").replace(/ậ/gi,"a").replace(/é/gi,"e").replace(/è/gi,"e").replace(/ẻ/gi,"e").replace(/ẽ/gi,"e").replace(/ẹ/gi,"e").replace(/ê/gi,"e").replace(/ế/gi,"e").replace(/ề/gi,"e").replace(/ể/gi,"e").replace(/ễ/gi,"e").replace(/ệ/gi,"e").replace(/í/gi,"i").replace(/ì/gi,"i").replace(/ỉ/gi,"i").replace(/ĩ/gi,"i").replace(/ị/gi,"i").replace(/ú/gi,"u").replace(/ù/gi,"u").replace(/ủ/gi,"u").replace(/ũ/gi,"u").replace(/ụ/gi,"u").replace(/ư/gi,"u").replace(/ứ/gi,"u").replace(/ừ/gi,"u").replace(/ử/gi,"u").replace(/ữ/gi,"u").replace(/ự/gi,"u").replace(/ó/gi,"o").replace(/ò/gi,"o").replace(/ỏ/gi,"o").replace(/õ/gi,"o").replace(/ọ/gi,"o").replace(/ô/gi,"o").replace(/ố/gi,"o").replace(/ồ/gi,"o").replace(/ổ/gi,"o").replace(/ỗ/gi,"o").replace(/ộ/gi,"o").replace(/ơ/gi,"o").replace(/ớ/gi,"o").replace(/ờ/gi,"o").replace(/ở/gi,"o").replace(/ỡ/gi,"o").replace(/ợ/gi,"o").replace(/ý/gi,"y").replace(/ỳ/gi,"y").replace(/ỷ/gi,"y").replace(/ỹ/gi,"y").replace(/ỵ/gi,"y").replace(/đ/g,"d").replace(/Đ/g,"D").replace(/[^A-z-0-9]/g,"").replace(/--/g,'-').replace(/--/g,'-').replace(/--/g,'-')
    }
});