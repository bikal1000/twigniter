//popup
jQuery(document).ready(function() {
  jQuery(".popup_form").submit(function(e) {
    e.preventDefault();
  });

  jQuery(".show_popup").click(function() {
    jQuery(".first_trial").show();
    jQuery("body").css("overflow-y", "hidden");
  });

  // var waring_message = jQuery(".warning");
  // var inputText = jQuery(".inputFileEmail,.inputFileText").val();
  jQuery("#free_trial_button").click(function() {
    var inputEmailValue = jQuery(".inputFileEmail").val();
    var inputTextValue = jQuery(".inputFileText").val();
    var firstInputValue = jQuery(".first_input").val();
    alert(
      `Likes Count: ` +
        firstInputValue +
        `\nUserName: ` +
        inputTextValue +
        `\n` +
        `Email: ` +
        inputEmailValue
    );
    // if (inputText == "") {
    //   waring_message.show();
    // } else {
    jQuery(".checkout").show();
    // }
  });

  jQuery("#checkout_button").click(function() {
    var instantDelivery = jQuery(".second_input").val();
    alert(`Delevery Time: ` + instantDelivery);
    jQuery(".preview").show();
  });
  jQuery("#preview_button").click(function() {
    jQuery(".targeting").show();
  });
  jQuery("#targeting_button").click(function() {
    var selectedCountry = jQuery(".country option:selected").text();
    var selectedGender = jQuery(".gender option:selected").text();
    var selectedRocky = jQuery(".rocky option:selected").text();
    alert(
      `Country = ` +
        selectedCountry +
        `\nGender = ` +
        selectedGender +
        `\nRocky = ` +
        selectedRocky
    );
    jQuery(".completed").show();
  });

  jQuery("#completed_button,.free_trial_overlay").click(function() {
    jQuery(".free_trial_whole").hide();
    removeFields();
    jQuery(".input_wrapper > span").remove();
    jQuery("body").css("overflow-y", "auto");
  });

  function removeFields() {
    jQuery(".inputFileEmail").val("");
    jQuery(".inputFileText").val("");
    jQuery(".second_input").val("");
  }
  // jQuery(".show_popup").click(function() {
  //   var price = jQuery(this).attr("data-price");
  //   console.log(price);
  // });

  function inputValue() {
    var displayPrice = jQuery("#free_trial_button").attr("like-price");
    var displayLike = jQuery("#free_trial_button").attr("like-count");
    var likePrice = `$` + displayPrice;
    var likeCount = displayLike + ` Likes`;
    jQuery(".first_input").val(likeCount);
    var placeholderVal = jQuery(".first_input").attr(
      "placeholder",
      displayLike + ` Real Instagram Likes`
    );
    var priceTag = `<span>` + likePrice + `</span>`;
    jQuery(".input_wrapper").append(priceTag);
  }

  jQuery(".show_popup").click(function() {
    var packageName = jQuery(this).attr("data-pack");
    if (packageName == "first-datapack") {
      var price = jQuery("#free_trial_button").attr({
        "like-price": "50.99",
        "like-count": "50"
      });
      inputValue();
    }
    if (packageName == "second-datapack") {
      var price = jQuery("#free_trial_button").attr({
        "like-price": "100.99",
        "like-count": "100"
      });
      inputValue();
    }
    if (packageName == "third-datapack") {
      var price = jQuery("#free_trial_button").attr({
        "like-price": "150.99",
        "like-count": "150"
      });
      inputValue();
    }
    if (packageName == "fourth-datapack") {
      var price = jQuery("#free_trial_button").attr({
        "like-price": "200.99",
        "like-count": "200"
      });
      inputValue();
    }
    if (packageName == "fifth-datapack") {
      var price = jQuery("#free_trial_button").attr({
        "like-price": "250.99",
        "like-count": "250"
      });
      inputValue();
    }
  });
});
