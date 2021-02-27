$(document).ready(function() {
  $(document).on('click', '.has-sub', function() {
    var _this = $(this)
    if (!$(this).hasClass('expanded')) {
      setTimeout(function() {
        _this.find('ul').attr("style", "")
      }, 300);
    } else {
      $('.has-sub ul').each(function(id, ele) {
        var _that = $(this)
        if (_this.find('ul')[0] != ele) {
          setTimeout(function() {
            _that.attr("style", "")
          }, 300);
        }
      })
    }
  })
  $('.user-info-menu .hidden-xs').click(function() {
    if ($('.sidebar-menu').hasClass('collapsed')) {
      $('.has-sub.expanded > ul').attr("style", "")
    } else {
      $('.has-sub.expanded > ul').show()
    }
  })
  $("#main-menu li ul li").click(function() {
    $(this).siblings('li').removeClass('active'); // 删除其他兄弟元素的样式
    $(this).addClass('active'); // 添加当前元素的样式
  });
  $("a.smooth").click(function(ev) {
    ev.preventDefault();
    if ($("#main-menu").hasClass('mobile-is-visible') != true)
      return;
    public_vars.$mainMenu.add(public_vars.$sidebarProfile).toggleClass('mobile-is-visible');
    ps_destroy();
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top - 80
    }, {
      duration: 500,
      easing: "swing"
    });
  });
  return false;
});
var href = "";
var pos = 0;
$("a.smooth").click(function(e) {
  e.preventDefault();
  if ($("#main-menu").hasClass('mobile-is-visible') === true)
    return;
  $("#main-menu li").each(function() {
    $(this).removeClass("active");
  });
  $(this).parent("li").addClass("active");
  href = $(this).attr("href");
  pos = $(href).position().top - 100;
  $("html,body").animate({
    scrollTop: pos
  }, 500);
});
! function() {
  function g() {
    h(), i(), j(), k()
  }
  function h() {
    d.checked = s()
  }
  function i() {
    var a = document.querySelector('input[name="type"][value="' + p() + '"]');
    a && (a.checked = !0, l(a))
  }
  function j() {
    v(u())
  }
  function k() {
    w(t())
  }
  function l(a) {
    for (var b = 0; b < e.length; b++) e[b].classList.remove("s-current");
    a.parentNode.parentNode.parentNode.classList.add("s-current")
  }
  function m(a, b) {
    window.localStorage.setItem("superSearch" + a, b)
  }
  function n(a) {
    return window.localStorage.getItem("superSearch" + a)
  }
  function o(a) {
    f = a.target, v(u()), w(a.target.value), m("type", a.target.value), c.focus(), l(a.target)
  }
  function p() {
    var b = n("type");
    return b || a[0].value
  }
  function q(a) {
    m("newWindow", a.target.checked ? 1 : -1), x(a.target.checked)
  }
  function r(a) {
    return a.preventDefault(), "" == c.value ? (c.focus(), !1) : (w(t() + c.value), x(s()), s() ? window.open(b.action, +new Date) : location.href = b.action, void 0)
  }
  function s() {
    var a = n("newWindow");
    return a ? 1 == a : !0
  }
  function t() {
    return document.querySelector('input[name="type"]:checked').value
  }
  function u() {
    return document.querySelector('input[name="type"]:checked').getAttribute("data-placeholder")
  }
  function v(a) {
    c.setAttribute("placeholder", a)
  }
  function w(a) {
    b.action = a
  }
  function x(a) {
    a ? b.target = "_blank" : b.removeAttribute("target")
  }
  var y, a = document.querySelectorAll('input[name="type"]'),
    b = document.querySelector("#super-search-fm"),
    c = document.querySelector("#search-text"),
    d = document.querySelector("#set-search-blank"),
    e = document.querySelectorAll(".search-group"),
    f = a[0];
  for (g(), y = 0; y < a.length; y++) a[y].addEventListener("change", o);
  d.addEventListener("change", q), b.addEventListener("submit", r)
}();
