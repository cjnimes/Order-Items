function order()
{
    function ajax_post_order()
    {
        var order = [];
        $('.item').each(function(index) { order[index] = $(this).data('id'); });
        $.post('order.php', {action: 'order', order: order }, function(response)
        {
            $('#response').html(response);
        });
    }    

    $(document).on('click', '.button-move-up', function()
    {
        var $curr = $(this).parents('.item');
        var $prev = $curr.prev('.item');
        if ($prev.is('.item')) {        
            $curr.animate({top: (-1 * $curr.height()) + 'px'}, 500, function()
            {
                $prev.animate({top: $curr.height() + 'px'}, 500, function()
                {
                    $curr.css('top', '0px');
                    $prev.css('top', '0px');
                    $curr.insertBefore($prev);
                    ajax_post_order();
                });
            });
        }
    });

    $(document).on('click', '.button-move-down', function()
    {
        var $curr = $(this).parents('.item');
        var $next = $curr.next('.item');
        if ($next.is('.item')) {        
            $curr.animate({top: $curr.height() + 'px'}, 500, function()
            {
                $next.animate({top: (-1 * $curr.height()) + 'px'}, 500, function()
                {
                    $curr.css('top', '0px');
                    $next.css('top', '0px');
                    $curr.insertAfter($next);
                    ajax_post_order();
                });
            });        
        }    
    });
}