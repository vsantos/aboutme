export const constSkills = [
    {
        title: 'Cloud', 
        description: 'Cloud Architecture',
        icon: 'fa-solid fa-cloud',
        id: 1,
        children: [
            {
                title: 'AWS',
                description: 'Amazon Web Services',
                id: 1
            },
            {
                title: 'GCP',
                description: 'Google Cloud Platform',
                id: 2
            }
        ]
    },
    {
        title: 'Kubernetes', 
        description: 'Container Orchestration',
        icon: 'fa-solid fa-boxes-stacked',
        id: 2,
        children: [
            {
                title: 'EKS',
                description: 'Elastic Kubernetes Service',
                id: 1
            },
            {
                title: 'GKE',
                description: 'Google Kubernetes Engine',
                id: 2
            },
            {
                title: 'Kind/K3s/Minikube',
                description: 'Local dev and testing',
                id: 3
            }
        ]
    },
    {
        title: 'CI/CD', 
        description: 'Deployment pipelines',
        icon: 'fa-solid fa-arrows-spin',
        id: 3,
        children: [
            {
                title: 'Dev. Processes',
                description: '',
                id: 1
            },
            {
                title: 'Automated Tests',
                description: '',
                id: 2
            },
            {
                title: 'Rollout Strategies',
                description: '',
                id: 3
            }
        ]
    },
    {
        title: 'Observability', 
        description: 'Track your microservices',
        icon: 'fa-solid fa-eye',
        id: 4,
        children: [
            {
                title: 'Traces/spans',
                description: '',
                id: 1
            },
            {
                title: 'Logging',
                description: 'cat /var/log/containers/*.json',
                id: 2
            },
            {
                title: 'Metrics',
                description: 'Low cardinality',
                id: 3
            }
        ]
    },
    {
        title: 'Engineering', 
        description: 'Solutions Development',
        icon: 'fa-solid fa-code',
        id: 4,
        children: [
            {
                title: 'Bashscript',
                description: '',
                id: 1
            },
            {
                title: 'Golang',
                description: 'cat /var/log/containers/*.json',
                id: 2
            }
        ]
    }
]