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


const host = "http://localhost:8080/api/nov/";

const login_location = "/login.html"
const index_location = "/index.html"

export default {
  renderNoCover,
  login_location,
  index_location,
  host
};
</script>