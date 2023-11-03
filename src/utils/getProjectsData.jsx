import projects from '../data/projectsData.json';

export function getProjects() {
    return projects;
}

export function getProject(id) {
    const selectedProject = projects.find((project) => project.id === id);
    return selectedProject;
}

export function getLastProjectId(){
    return projects[projects.length-1];
}