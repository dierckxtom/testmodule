Module.register("TestModule", {
  getDom: function () {
    var wrapper = document.createElement("div");
    wrapper.style.fontSize = "30px";
    wrapper.style.fontFamily = "Arial, sans-serif";
    wrapper.style.color = "red";  // Make text clearly visible
    wrapper.style.backgroundColor = "yellow";  // Make background yellow
    wrapper.innerHTML = "This is a test module to check rendering!";
    return wrapper;
  }
});
