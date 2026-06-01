export function criarPreview() {
    const container = document.createElement('form')

    const previewContainer = document.createElement('div')
    previewContainer.classList.add('preview-container')

    const input = document.createElement('input')
    input.id = 'preview-input'
    input.classList.add('preview-input')
    input.type = 'file'
    input.accept = 'image/*'

    const label = document.createElement('label')
    label.className = 'preview-label'
    label.htmlFor = 'preview-input'

    const image = document.createElement('img')
    image.id = 'preview-image'
    image.className = 'preview-image'
    image.src = './img/upload-icon.svg'

    previewContainer.append(input, label, image)

    container.append(previewContainer)

    return container
}