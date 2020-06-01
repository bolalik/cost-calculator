<style>
  .loading-item {
    height: 3rem;
    background: white;
    display: flex;
    align-items: center;
    line-height: 1rem;
    padding-left: 16px;
  }

  .loading-item .glow-text span {
    animation: glow 1.5s ease-in-out infinite;
    background: #eee;
    color: transparent;
    cursor: progress;
    display: inline-block;
  }
  .loading-item + .loading-item {
    border-top: 1px solid #f0f9fb;
  }
  @keyframes glow {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
</style>

<div class="loading-item">
  <span class="glow-text">
    <span>Loading</span>
  </span>
</div>
