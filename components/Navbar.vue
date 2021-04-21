<template>
  <mdb-navbar
    SideClass="navbar navbar-expand-lg navbar-light navbar-custom"
    [containerInside]="false"
  >
    <mdb-navbar-brand>
      <a class="navbar-brand" routerLink="">
        <img src="assets/b-logo.png" width="32" alt="" />
      </a>
    </mdb-navbar-brand>
    <links>
      <div class="navbar-nav ml-auto">
        <a
          class="nav-item nav-link waves-light"
          routerLink=""
          [routerLinkActiveOptions]="{ exact: true }"
          routerLinkActive="active"
          mdbWavesEffect
          >Home <span class="sr-only">(current)</span></a
        >
        <a
          class="nav-item nav-link waves-light"
          routerLink="/projects"
          routerLinkActive="active"
          mdbWavesEffect
          >Projects</a
        >
        <a
          class="nav-item nav-link waves-light"
          routerLink="/resume"
          routerLinkActive="active"
          mdbWavesEffect
          >Resume</a
        >
        <a
          class="nav-item nav-link waves-light"
          href="https://benjaminlooi-blog.dev"
          mdbWavesEffect
          >Blog</a
        >
      </div>
    </links>
  </mdb-navbar>
</template>

<script>
export default {}
</script>

<style></style>
