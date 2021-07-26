(() => {
    const $triangles = document.querySelectorAll('.triangle');
    const template = `<svg class="triangle-svg" viewBox="0 0 140 141">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <polygon class="triangle-polygon"  points="70 6 136 138 4 138"></polygon>
    </g>
  </svg>`;

    Array.prototype.forEach.call($triangles, ($triangle, index) => {
        $triangle.innerHTML = template;
    });
})();