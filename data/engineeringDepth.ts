import type { Locale, LocalizedText } from "@/data/projects";

export type EngineeringDepthCase = {
  name: string;
  description: LocalizedText;
  highlights: LocalizedText[];
  tags: string[];
  terminalLines: Record<Locale, string[]>;
  // href: "https://placeholder-for-live-challenge-or-repository"
};

export const engineeringDepthCases: EngineeringDepthCase[] = [
  {
    name: "Linux From Scratch: Building Linux from Source",
    description: {
      "en-US":
        "Built a Linux system from source following the Linux From Scratch book during a seven-day live challenge, presented primarily in English. The project covered toolchain bootstrapping, package compilation, chroot environment setup, kernel configuration, bootloader setup, systemd integration and troubleshooting.",
      "pt-BR":
        "Construiu um sistema Linux a partir do código-fonte seguindo o livro Linux From Scratch durante um desafio ao vivo de sete dias, apresentado principalmente em inglês. O projeto cobriu bootstrap de toolchain, compilação de pacotes, ambiente chroot, configuração de kernel, bootloader, integração com systemd e troubleshooting.",
    },
    highlights: [
      {
        "en-US": "Built a Linux system from source using the Linux From Scratch book",
        "pt-BR": "Construiu um sistema Linux do zero usando o livro Linux From Scratch",
      },
      {
        "en-US": "Completed a seven-day live technical challenge",
        "pt-BR": "Completou um desafio técnico ao vivo de sete dias",
      },
      {
        "en-US": "Presented the process primarily in English",
        "pt-BR": "Apresentou o processo principalmente em inglês",
      },
      {
        "en-US": "Worked through compilation, configuration and boot issues",
        "pt-BR": "Trabalhou em problemas de compilação, configuração e boot",
      },
      {
        "en-US":
          "Strengthened Linux, shell, systems debugging and infrastructure fundamentals",
        "pt-BR":
          "Fortaleceu fundamentos de Linux, shell, debugging de sistemas e infraestrutura",
      },
    ],
    tags: [
      "Linux",
      "Bash",
      "GCC",
      "Make",
      "Kernel",
      "GRUB",
      "chroot",
      "systemd",
      "Filesystems",
      "Debugging",
    ],
    terminalLines: {
      "en-US": [
        "$ make tools && enter-chroot",
        "[kernel] configuring filesystems, drivers and init",
        "[boot] installing GRUB and validating systemd targets",
        "[debug] tracing compile, mount and boot failures",
      ],
      "pt-BR": [
        "$ make tools && enter-chroot",
        "[kernel] configurando filesystems, drivers e init",
        "[boot] instalando GRUB e validando targets systemd",
        "[debug] rastreando falhas de compilacao, mount e boot",
      ],
    },
  },
];
