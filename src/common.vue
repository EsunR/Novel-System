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


const host = "http://47.95.196.58:8765/novelshop/api/nov/";

const login_location = "/login.html"

export default {
  renderNoCover,
  login_location,
  host
};
</script>