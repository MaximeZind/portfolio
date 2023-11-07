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

export function getProjectTypes(array) {
    let projectTypes = ['All']
    array.map((item) => {
        !projectTypes.includes(item.type) && projectTypes.push(item.type);
    });
    return projectTypes;
}