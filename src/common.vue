<script type="text/javascript">
function renderNoCover() {
  $(".card-img-top").each(function() {
    if ($(this).attr("src") == "") {
      $(this).css("display", "none");
      $(this)
        .prev()
        .css("display", "block");
    }
  });
}


const host = "http://47.95.196.58:8080/api/nov";

export default {
  renderNoCover,
  host
};
</script>