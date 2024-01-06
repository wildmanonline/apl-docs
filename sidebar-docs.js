module.exports = {
  mainSidebar: {
    "Getting Started": [
      "get-started/overview",
      "get-started/promo",
      "get-started/prerequisites",
      {
        "Installation": [
          "get-started/installation/overview",
          "get-started/installation/aws",
          "get-started/installation/azure",
          "get-started/installation/civo",
          "get-started/installation/custom",
          "get-started/installation/digitalocean",
          "get-started/installation/gcp",
          "get-started/installation/linode",
          "get-started/installation/scaleway",
          "get-started/installation/vultr",
          "get-started/installation/helm",
          "get-started/installation/known-issues",
          "get-started/installation/oidc",
          "get-started/installation/kms",
          "get-started/installation/entrypoint",
          "get-started/installation/byo-wildcard",
        ]
      },
      "get-started/activation",
      {
        "Otomi labs": [
          "get-started/labs/overview",
          "get-started/labs/lab-1",
          "get-started/labs/lab-3",
          "get-started/labs/lab-6",
          "get-started/labs/lab-26",
          "get-started/labs/lab-8",
          "get-started/labs/lab-10",
          "get-started/labs/lab-29",
          "get-started/labs/lab-13",
          "get-started/labs/lab-18",
          "get-started/labs/lab-11",
          "get-started/labs/lab-32",
          "get-started/labs/lab-24",
          "get-started/labs/lab-15",
          "get-started/labs/lab-7",
          "get-started/labs/lab-17",
          "get-started/labs/lab-20",
          "get-started/labs/lab-21",
          "get-started/labs/lab-22",
          "get-started/labs/lab-30",
          "get-started/labs/lab-31",
          "get-started/labs/lab-23",
          "get-started/labs/lab-19",
          "get-started/labs/lab-27",
          "get-started/labs/lab-28",
        ],
      },
    ],
    "For Platform Admins": [
      {
        "Otomi Console": [
          "for-ops/console/overview",
          "for-ops/console/dashboard",
          "for-ops/console/apps",
          "for-ops/console/shortcuts",
          "for-ops/console/policies",
          "for-ops/console/teams",
          "for-ops/console/projects",
          "for-ops/console/builds",
          "for-ops/console/secrets",
          "for-ops/console/workloads",
          "for-ops/console/services",
          "for-ops/console/backups",
          "for-ops/console/shell",
          {
            Settings: [
              "for-ops/console/settings/cluster",
              "for-ops/console/settings/otomi",
              "for-ops/console/settings/key-management",
              "for-ops/console/settings/alerts",
              "for-ops/console/settings/co-monitoring",
              "for-ops/console/settings/azure",
              "for-ops/console/settings/dns",
              "for-ops/console/settings/ingress",
              "for-ops/console/settings/oidc",
              "for-ops/console/settings/smtp",
              "for-ops/console/settings/backup",
            ],
          },
        ],
      },
      {
        "How To": [
          "for-ops/how-to/overview",
          "for-ops/how-to/use-catalog",
          "for-ops/how-to/ingress-classes",
          "for-ops/how-to/use-team-admin",
          "for-ops/how-to/core-only",
          // "for-ops/how-to/switch-to-dns",
          "for-ops/how-to/backups",
        ],
      },
      {
        "Otomi CLI": [
          "for-ops/cli/installation",
          "for-ops/cli/deploying",
          "for-ops/cli/known-issues",
          {
            "CLI Commands": [
              "for-ops/cli/apply",
              "for-ops/cli/bash",
              "for-ops/cli/bootstrap",
              "for-ops/cli/check-policies",
              "for-ops/cli/commit",
              "for-ops/cli/decrypt",
              "for-ops/cli/destroy",
              "for-ops/cli/diff",
              "for-ops/cli/encrypt",
              "for-ops/cli/lint",
              "for-ops/cli/pull",
              "for-ops/cli/rotate-keys",
              "for-ops/cli/status",
              "for-ops/cli/sync",
              "for-ops/cli/template",
              "for-ops/cli/test",
              "for-ops/cli/validate-templates",
              "for-ops/cli/validate-values",
              "for-ops/cli/values",
              "for-ops/cli/x",
            ],
          },
        ],
      },
      {
        SRE: [
          "for-ops/sre/overview",
          "for-ops/sre/daily",
          "for-ops/sre/upgrades",
          "for-ops/sre/troubleshooting",
        ],
      },
    ],
    "For DevOps Teams": [
      {
        "Otomi Console": [
          "for-devs/console/dashboard",
          "for-devs/console/apps",
          "for-devs/console/catalog",
          "for-devs/console/shortcuts",
          "for-devs/console/projects",
          "for-devs/console/builds",
          "for-devs/console/workloads",
          "for-devs/console/services",
          "for-devs/console/secrets",
          "for-devs/console/shell",
          "for-devs/console/deploy-changes",
          "for-devs/console/settings",
        ],
      },
    ],
    // "For CISOs": ["for-ciso/overview"],
    "Otomi Applications": [
      "apps/alertmanager",
      "apps/argocd",
      "apps/certmanager",
      "apps/cloudnativepg",
      "apps/drone",
      "apps/external-dns",
      "apps/gatekeeper",
      "apps/gitea",
      "apps/grafana",
      "apps/harbor",
      "apps/ingress-nginx",
      "apps/istio",
      "apps/jaeger",
      "apps/keycloak",
      "apps/knative",
      "apps/loki",
      "apps/minio",
      "apps/otel",
      "apps/prometheus",
      "apps/thanos",
      "apps/trivy",
      "apps/tekton",
      "apps/vault",
      "apps/velero",
    ],
    // "Tutorials": [
    //   "tutorials/overview",
    //   "tutorials/tutorial-1",
    // ],
  },
};
