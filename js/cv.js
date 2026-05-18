window.onload = () => {
    const bars = document.querySelectorAll(".progress1 div, .progress div");

    bars.forEach(bar => {
        bar.style.width = bar.dataset.width;
    });
};