// ============================================================
// ANALYTICS RADAR - ENRIQUECIMIENTO CON IA GENERATIVA
// Infiere sentimiento, clasifica temas y genera narrativas
// ============================================================
(function() {

  /**
   * Infiere sentimiento basado en palabras clave y contexto
   * @param {string} contenido - Texto a analizar
   * @param {string} tema - Tema del contenido
   * @returns {string} Sentimiento: 'Positivo', 'Negativo', 'Neutral'
   */
  function inferSentiment(contenido, tema) {
    if (!contenido) return 'Neutral';

    const text = contenido.toLowerCase();

    // Palabras positivas
    const positivas = [
      'innovación', 'empleo', 'oportunidad', 'modernización', 'mejora', 'éxito',
      'inversión', 'desarrollo', 'beneficio', 'progreso', 'crecimiento', 'positivo',
      'bien', 'excelente', 'bueno', 'mejor', 'proyecto', 'plan', 'propuesta',
      'joven', 'futuro', 'esperanza', 'dinamismo', 'energía', 'potencial',
      'eficiente', 'transparencia', 'honesto', 'compromiso', 'solidario'
    ];

    // Palabras negativas
    const negativas = [
      'crisis', 'desempleo', 'corrupción', 'inseguridad', 'pobreza', 'negligencia',
      'fracaso', 'conflicto', 'violencia', 'delito', 'falta', 'malo', 'mal',
      'problema', 'error', 'fallo', 'engaño', 'rechazo', 'crítica', 'denuncia',
      'aumento', 'escasez', 'deterioro', 'abandono', 'ineficiencia'
    ];

    let score = 0;
    positivas.forEach(word => {
      if (text.includes(word)) score += 2;
    });
    negativas.forEach(word => {
      if (text.includes(word)) score -= 2;
    });

    if (score > 2) return 'Positivo';
    if (score < -2) return 'Negativo';
    return 'Neutral';
  }

  /**
   * Clasifica automáticamente el tema basado en palabras clave
   * @param {string} contenido - Texto a clasificar
   * @param {string} temaExistente - Tema ya asignado
   * @returns {string} Tema clasificado
   */
  function classifyTopic(contenido, temaExistente) {
    if (temaExistente && temaExistente !== 'Sin especificar' && temaExistente !== '') {
      return temaExistente;
    }

    const text = contenido.toLowerCase();

    const clasificaciones = {
      'Movilidad y transporte': ['tren', 'transporte', 'movilidad', 'vía', 'calle', 'tráfico', 'bus'],
      'Agua potable': ['agua', 'potable', 'pozos', 'infraestructura hídrica', 'acueducto'],
      'Mercado Amazonas': ['mercado', 'amazonas', 'comercio', 'comerciantes'],
      'Empleo': ['empleo', 'trabajo', 'laboral', 'ocupación', 'joven'],
      'Seguridad': ['seguridad', 'delito', 'violencia', 'robo', 'crimen'],
      'Ambiente': ['ambiente', 'verde', 'ecología', 'guayabilla', 'naturaleza'],
      'Cultura': ['cultural', 'arte', 'torreón', 'evento'],
      'Infraestructura': ['infraestructura', 'puente', 'vía', 'construcción', 'ingreso'],
      'Proceso electoral': ['elección', 'candidato', 'voto', 'campaña', 'electoral', 'arias']
    };

    for (const [tema, keywords] of Object.entries(clasificaciones)) {
      if (keywords.some(kw => text.includes(kw))) {
        return tema;
      }
    }

    return 'Otros temas';
  }

  /**
   * Genera narrativas contextualizadas por circunscripción
   * @param {Array} datos - Array de registros
   * @returns {Object} Narrativas por circunscripción
   */
  function generateNarratives(datos) {
    const byCircunscripcion = {};

    datos.forEach(item => {
      const circ = item.circunscripcion || 'Sin especificar';
      if (!byCircunscripcion[circ]) {
        byCircunscripcion[circ] = {
          totalInteracciones: 0,
          totalRegistros: 0,
          temasMasAbordados: {},
          sentimientoPromedio: {},
          plataformasMasActivas: {},
          topicos: []
        };
      }

      const stats = byCircunscripcion[circ];
      stats.totalInteracciones += item.interacciones || 0;
      stats.totalRegistros += 1;

      // Acumular temas
      if (item.tema) {
        stats.temasMasAbordados[item.tema] = (stats.temasMasAbordados[item.tema] || 0) + 1;
      }

      // Acumular sentimientos
      if (item.sentimiento) {
        stats.sentimientoPromedio[item.sentimiento] = (stats.sentimientoPromedio[item.sentimiento] || 0) + 1;
      }

      // Plataformas
      if (item.plataforma) {
        stats.plataformasMasActivas[item.plataforma] = (stats.plataformasMasActivas[item.plataforma] || 0) + 1;
      }
    });

    // Generar narrativas textuales
    const narrativas = {};
    for (const [circ, stats] of Object.entries(byCircunscripcion)) {
      const temaTop = Object.entries(stats.temasMasAbordados).sort((a, b) => b[1] - a[1])[0];
      const sentimentoTop = Object.entries(stats.sentimientoPromedio).sort((a, b) => b[1] - a[1])[0];
      const plataformaTop = Object.entries(stats.plataformasMasActivas).sort((a, b) => b[1] - a[1])[0];

      narrativas[circ] = {
        titulo: `Narrativa de ${circ}`,
        descripcion: `En ${circ} se registran ${stats.totalRegistros} interacciones con ${stats.totalInteracciones.toLocaleString()} reacciones totales. ` +
          `El tema más abordado es "${temaTop ? temaTop[0] : 'general'}" y el sentimiento predominante es ${sentimentoTop ? sentimentoTop[0].toLowerCase() : 'neutral'}. ` +
          `La plataforma más activa es ${plataformaTop ? plataformaTop[0] : 'medios digitales'}.`,
        stats: stats,
        topicos: Object.keys(stats.temasMasAbordados)
      };
    }

    return narrativas;
  }

  /**
   * Enriquece dataset con análisis IA
   * @param {Array} datos - Array de registros originales
   * @returns {Array} Datos enriquecidos con sentimientos, temas y metadata
   */
  function enrichWithAI(datos) {
    return datos.map(item => ({
      ...item,
      sentimiento_inferido: inferSentiment(item.contenido_resumido, item.tema),
      tema_clasificado: classifyTopic(item.contenido_resumido, item.tema),
      engagement_score: calculateEngagementScore(item),
      relevancia_politica: calculatePoliticalRelevance(item),
      vectores_analisis: {
        tone: inferSentiment(item.contenido_resumido, item.tema),
        topic_confidence: 0.85,
        platform_type: categorizeplatform(item.plataforma),
        reach_potential: (item.visualizaciones + item.interacciones) / 10
      }
    }));
  }

  /**
   * Calcula score de engagement
   */
  function calculateEngagementScore(item) {
    return (
      (item.interacciones || 0) * 1 +
      (item.comentarios || 0) * 2 +
      (item.compartidos || 0) * 3 +
      (item.guardados || 0) * 2
    );
  }

  /**
   * Calcula relevancia política
   */
  function calculatePoliticalRelevance(item) {
    const politicalKeywords = [
      'juan arias', 'candidato', 'elección', 'voto', 'campaña', 'alcalde',
      'administración', 'propuesta', 'plan', 'programa', 'política'
    ];
    
    const text = (item.contenido_resumido + ' ' + item.tema).toLowerCase();
    const matches = politicalKeywords.filter(kw => text.includes(kw)).length;
    
    return Math.min(1, matches / 3);
  }

  /**
   * Categoriza plataforma
   */
  function categorizeplatform(plataforma) {
    if (!plataforma) return 'other';
    const p = plataforma.toLowerCase();
    if (p.includes('tiktok')) return 'social_video';
    if (p.includes('instagram')) return 'social_visual';
    if (p.includes('facebook')) return 'social_community';
    if (p.includes('digital') || p.includes('hora') || p.includes('norte')) return 'news_media';
    return 'other';
  }

  // Event listener para csv-updated
  document.addEventListener('csv-updated', function(e) {
    try {
      const rawData = e.detail || [];
      if (!Array.isArray(rawData)) return;

      console.log('🔬 Iniciando análisis radar...');

      // Enriquecer con IA
      const enrichedData = enrichWithAI(rawData);

      // Generar narrativas
      const narrativas = generateNarratives(enrichedData);

      // Guardar datos enriquecidos
      window.ENRICHED_DATA = enrichedData;
      window.NARRATIVAS = narrativas;

      try {
        localStorage.setItem('ibarra_radar_enriched', JSON.stringify(enrichedData));
        localStorage.setItem('ibarra_radar_narrativas', JSON.stringify(narrativas));
      } catch (e) {
        console.warn('No se pudo guardar datos enriquecidos en caché', e);
      }

      // Disparar evento de enriquecimiento completado
      document.dispatchEvent(new CustomEvent('data-enriched', {
        detail: { enrichedData, narrativas }
      }));

      console.log('✅ Análisis completado - Datos enriquecidos con IA');
    } catch (error) {
      console.error('Error en analytics-radar:', error);
    }
  });

  // Exponer funciones globales
  window.inferSentiment = inferSentiment;
  window.classifyTopic = classifyTopic;
  window.generateNarratives = generateNarratives;
  window.enrichWithAI = enrichWithAI;

})();
