export type Locale = "en-US" | "pt-BR";

export type LocalizedText = Record<Locale, string>;

export type Project = {
  name: string;
  description: LocalizedText;
  href: string;
  tags: string[];
  highlights: LocalizedText[];
};

export type SkillGroup = {
  category: LocalizedText;
  items: string[];
  icon: "data" | "cloud" | "analytics" | "tools";
};

export type GithubHighlight = {
  label: LocalizedText;
  value: string;
};

const githubBase = "https://github.com/SamHavocH";

export const projects: Project[] = [
  {
    name: "pyspark-medallion-platform",
    description: {
      "en-US":
        "A PySpark lakehouse project that demonstrates how to structure bronze, silver and gold layers, optimize Parquet outputs and run incremental processing with production-style conventions.",
      "pt-BR":
        "Projeto lakehouse em PySpark que demonstra estrutura bronze, silver e gold, otimização de saídas Parquet e processamento incremental com convenções próximas de produção.",
    },
    href: `${githubBase}/pyspark-medallion-platform`,
    tags: ["PySpark", "Lakehouse", "Parquet"],
    highlights: [
      {
        "en-US": "Medallion architecture",
        "pt-BR": "Arquitetura medallion",
      },
      {
        "en-US": "Incremental ETL",
        "pt-BR": "ETL incremental",
      },
      {
        "en-US": "Distributed processing",
        "pt-BR": "Processamento distribuído",
      },
    ],
  },
  {
    name: "api-to-postgres-pipeline",
    description: {
      "en-US":
        "A practical batch ETL pipeline for API-to-database ingestion, with incremental loads, retries, schema normalization and Dockerized execution for easy technical review.",
      "pt-BR":
        "Pipeline ETL batch para ingestão de API em banco de dados, com cargas incrementais, retentativas, normalização de schema e execução Dockerizada para revisão técnica rápida.",
    },
    href: `${githubBase}/api-to-postgres-pipeline`,
    tags: ["Python", "PostgreSQL", "Docker"],
    highlights: [
      {
        "en-US": "API ingestion",
        "pt-BR": "Ingestão de API",
      },
      {
        "en-US": "Retry logic",
        "pt-BR": "Lógica de retentativas",
      },
      {
        "en-US": "Schema normalization",
        "pt-BR": "Normalização de schema",
      },
    ],
  },
  {
    name: "airflow-dbt-warehouse",
    description: {
      "en-US":
        "An analytics engineering environment combining Airflow, dbt and PostgreSQL to show orchestration, tested transformations and warehouse modeling in a reproducible local stack.",
      "pt-BR":
        "Ambiente de analytics engineering com Airflow, dbt e PostgreSQL para mostrar orquestração, transformações testadas e modelagem de warehouse em uma stack local reproduzível.",
    },
    href: `${githubBase}/airflow-dbt-warehouse`,
    tags: ["Airflow", "dbt", "Warehouse"],
    highlights: [
      {
        "en-US": "Bronze/Silver/Gold",
        "pt-BR": "Bronze/Silver/Gold",
      },
      {
        "en-US": "Testing",
        "pt-BR": "Testes",
      },
      {
        "en-US": "Docker Compose",
        "pt-BR": "Docker Compose",
      },
    ],
  },
  {
    name: "streaming-kafka-data-quality",
    description: {
      "en-US":
        "A streaming data quality project built to demonstrate real-time validation patterns, dead-letter handling and observability concerns that matter in production pipelines.",
      "pt-BR":
        "Projeto de qualidade de dados em streaming que demonstra validação em tempo real, tratamento com dead-letter queues e preocupações de observabilidade relevantes em pipelines de produção.",
    },
    href: `${githubBase}/streaming-kafka-data-quality`,
    tags: ["Kafka", "Streaming", "Data Quality"],
    highlights: [
      {
        "en-US": "Observability",
        "pt-BR": "Observabilidade",
      },
      {
        "en-US": "Dead-letter queues",
        "pt-BR": "Dead-letter queues",
      },
      {
        "en-US": "Data validation",
        "pt-BR": "Validação de dados",
      },
    ],
  },
  {
    name: ".dotfiles",
    description: {
      "en-US":
        "A Linux and terminal workflow repository that shows environment discipline, reproducible setup habits and productivity choices for engineering work.",
      "pt-BR":
        "Repositório de workflow Linux e terminal que mostra disciplina de ambiente, hábitos de setup reproduzível e escolhas de produtividade para engenharia.",
    },
    href: `${githubBase}/.dotfiles`,
    tags: ["Linux", "Shell", "Automation"],
    highlights: [
      {
        "en-US": "Terminal workflow",
        "pt-BR": "Workflow de terminal",
      },
      {
        "en-US": "Setup automation",
        "pt-BR": "Automação de setup",
      },
      {
        "en-US": "Developer productivity",
        "pt-BR": "Produtividade dev",
      },
    ],
  },
  {
    name: "validador_documentos",
    description: {
      "en-US":
        "A Python automation project for document quality validation, combining computer vision, business rules, scoring and structured outputs for operational use cases.",
      "pt-BR":
        "Projeto Python de automação para validação de qualidade documental, combinando visão computacional, regras de negócio, score e saídas estruturadas para uso operacional.",
    },
    href: `${githubBase}/validador_documentos`,
    tags: ["Python", "Validation", "Automation"],
    highlights: [
      {
        "en-US": "Business rules",
        "pt-BR": "Regras de negócio",
      },
      {
        "en-US": "Quality scoring",
        "pt-BR": "Score de qualidade",
      },
      {
        "en-US": "CSV and JSON reports",
        "pt-BR": "Relatórios CSV e JSON",
      },
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: {
      "en-US": "Data Engineering",
      "pt-BR": "Engenharia de Dados",
    },
    icon: "data",
    items: [
      "Python",
      "SQL",
      "PySpark",
      "ETL/ELT",
      "Data Quality",
      "Data Modeling",
      "Batch Processing",
      "Streaming",
    ],
  },
  {
    category: {
      "en-US": "Cloud & AWS",
      "pt-BR": "Cloud & AWS",
    },
    icon: "cloud",
    items: [
      "AWS Glue",
      "Amazon Athena",
      "Amazon S3",
      "AWS QuickSight",
      "Cloud data pipelines",
    ],
  },
  {
    category: {
      "en-US": "Analytics Engineering",
      "pt-BR": "Analytics Engineering",
    },
    icon: "analytics",
    items: [
      "Airflow",
      "dbt",
      "Bronze/Silver/Gold",
      "PostgreSQL",
      "Data Warehouse",
      "Testing",
    ],
  },
  {
    category: {
      "en-US": "DevOps & Tools",
      "pt-BR": "DevOps & Ferramentas",
    },
    icon: "tools",
    items: [
      "Docker",
      "Docker Compose",
      "Git",
      "GitHub",
      "Linux",
      "Shell",
      "VS Code",
      "Jupyter",
    ],
  },
];

export const githubHighlights: GithubHighlight[] = [
  {
    label: {
      "en-US": "Public repositories",
      "pt-BR": "Repositórios públicos",
    },
    value: "20",
  },
  {
    label: {
      "en-US": "Stars",
      "pt-BR": "Stars",
    },
    value: "12",
  },
  {
    label: {
      "en-US": "Followers",
      "pt-BR": "Seguidores",
    },
    value: "4",
  },
  {
    label: {
      "en-US": "Main focus",
      "pt-BR": "Foco principal",
    },
    value: "Data Engineering",
  },
];
