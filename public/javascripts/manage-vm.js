$('document').ready(function(){
  $('button.startVM').click(function(){
    $.ajax({
      url:"/vm/start",
      success:function(data,textStatus,jqXHR){
        $('p.statusVM').text(data)
      }

    })
  })
  $('button.statusVM').click(function(){
    $.ajax({
      url:"/vm/status",
      success:function(data,textStatus,jqXHR){
        $('p.statusVM span.status').text(data)
      }

    })
  })
})