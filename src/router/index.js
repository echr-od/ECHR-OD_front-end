import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Information",
      component: () => import("@/pages/Information/InformationPage.vue"),
    },
    {
      path: "/cases",
      name: "Cases",
      component: () => import("@/pages/Cases/CasesPage.vue"),
    },
    {
      path: "/case/:id",
      name: "CaseIdWrapper",
      props: true,
      component: () => import("@/pages/Cases/subPages/CaseIdWrapperPage.vue"),
      children: [
        {
          path: "",
          component: () => import("@/pages/Cases/subPages/CaseIdPage.vue"),
          name: "CaseId",
          props: true,
        },
        {
          path: "docs",
          component: () => import("@/pages/Cases/subPages/CaseIdDocsPage.vue"),
          name: "CaseIdDocs",
          props: true,
        },
        {
          path: "cited-apps",
          component: () =>
            import("@/pages/Cases/subPages/CaseIdCitedAppsPage.vue"),
          name: "CaseIdCitedApps",
          props: true,
        },
      ],
    },
    {
      path: "/conclusions",
      name: "conclusions",
      component: () => import("@/pages/Conclusions/ConclusionsPage.vue"),
    },
    {
      path: "/parties",
      name: "Parties",
      component: () => import("@/pages/Parties/PartiesPage.vue"),
      props: true,
    },
    {
      path: "/representatives",
      name: "Representatives",
      component: () =>
        import("@/pages/Representatives/RepresentativesPage.vue"),
      props: true,
    },
    {
      path: "/scl",
      name: "Scl",
      component: () => import("@/pages/Scl/SclPage.vue"),
      props: true,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("@/pages/NotFound/NotFoundPage.vue"),
    },
  ],
});

export default router;
