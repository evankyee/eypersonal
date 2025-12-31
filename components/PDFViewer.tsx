'use client'

interface PDFViewerProps {
  src: string
  title?: string
  height?: string
}

export default function PDFViewer({ src, title, height = '85vh' }: PDFViewerProps) {
  return (
    <div 
      className="pdf-viewer-wide"
      style={{ 
        marginTop: '20px',
        marginBottom: '20px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        overflow: 'hidden'
      }}>
      {title && (
        <div style={{ 
          padding: '12px 16px', 
          backgroundColor: '#f0f0f0',
          borderBottom: '1px solid #ccc',
          fontSize: '14px',
          color: '#666'
        }}>
          {title}
        </div>
      )}
      <iframe
        src={src}
        style={{
          width: '100%',
          height: height,
          border: 'none',
          display: 'block'
        }}
        title={title || 'PDF Document'}
      />
    </div>
  )
}

