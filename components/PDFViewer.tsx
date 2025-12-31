'use client'

interface PDFViewerProps {
  src: string
  title?: string
  height?: string
}

export default function PDFViewer({ src, title, height = '85vh' }: PDFViewerProps) {
  return (
    <div style={{ 
      width: '100%', 
      marginTop: '20px',
      marginBottom: '20px',
      border: '1px solid #333',
      borderRadius: '4px',
      overflow: 'hidden'
    }}>
      {title && (
        <div style={{ 
          padding: '12px 16px', 
          backgroundColor: '#1a1a1a',
          borderBottom: '1px solid #333',
          fontSize: '14px',
          color: '#888'
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

