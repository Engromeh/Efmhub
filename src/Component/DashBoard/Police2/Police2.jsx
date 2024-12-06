import { useState, useRef } from "react";
import "./Police2.css";

const Modal = ({ onClose }) => {
  const scrollContainerRef = useRef(null);
  const [scrollHeight, setScrollHeight] = useState(10);

  const handleScroll = () => {
    const scrollContainer = scrollContainerRef.current;
    const totalHeight =
      scrollContainer.scrollHeight - scrollContainer.clientHeight;
    const scrollTop = scrollContainer.scrollTop;

    const percentageScrolled = (scrollTop / totalHeight) * 100;
    setScrollHeight(10 + percentageScrolled); // Update the height of the scroll bar
  };

  return (
    <div className="police2-modal-overlay">
      <div className="police2-modal">
        <div className="police2-header">
          <h2 className="police2-modal-header">الشروط والاحكام</h2>
        </div>
        <div
          className="police2-scroll-container"
          ref={scrollContainerRef}
          onScroll={handleScroll}
        >
          <div className="police2-scroll-bar"></div>
          <div className="police2-modal-body">
            <p>
              وط وأحكام استخدام خدمات شركة EFM أهلاً بك في شركة EFM، أقوى شركة
              لربح المال عبر الإنترنت. قبل استخدام خدماتنا، يرجى قراءة الشروط
              والأحكام التالية بعناية. باستخدامك لموقعنا أو خدماتنا، فإنك توافق
              على الالتزام بهذه الشروط. 1. التعريفات
              <br />
              شركة EFM: تشير إلى الشركة المالكة لجميع الخدمات المقدمة، والمعروفة
              باسم "EFM". المستخدم: أي شخص يقوم بالتسجيل أو استخدام خدمات الشركة
              سواء كان فرداً أو كياناً. الخدمات: تشمل جميع المنتجات والمميزات
              التي تقدمها شركة EFM عبر الإنترنت.
              <br />
              2. التسجيل واستخدام الحساب لتتمكن من استخدام خدمات EFM، يجب عليك
              التسجيل وإنشاء حساب مستخدم. يجب أن تكون المعلومات المقدمة صحيحة
              ودقيقة. يتحمل المستخدم مسؤولية الحفاظ على سرية معلومات الحساب
              وكلمة المرور.
              <br />
              يجب أن لا يتم استخدام الحسابات لأغراض غير قانونية أو مخالفة
              للقوانين المعمول بها. 3. شروط استخدام خدماتنا المكافآت والعروض:
              تقدم شركة EFM مكافآت وعروضاً مميزة للمستخدمين وفقاً للشروط التي
              تحددها الشركة، والتي قد تتغير من حين لآخر.
              <br />
              الربح عبر الإنترنت: يجب على المستخدم الالتزام بالقوانين المحلية
              المتعلقة بالربح عبر الإنترنت. لا تتحمل شركة EFM أي مسؤولية قانونية
              في حال حدوث أي نزاع قانوني نتيجة لاستخدام الخدمة.
            </p>

            <p>شروط وأحكام استخدام خدمات شركة EFM...</p>
            <p>1. التعريفات...</p>
            <p>2. التسجيل والحساب...</p>
            <p>3. المكافآت والشروط...</p>
            <p>4. المسؤوليات...</p>
            <p>5. التحديثات...</p>
            <p>6. الملكية...</p>
            <p>7. الخصوصية...</p>
            <p>8. التعديلات...</p>
            <p>9. القانون المعمول به...</p>
            <p>10. التواصل...</p>
            <p>شروط وأحكام استخدام خدمات شركة EFM...</p>
            <p>1. التعريفات...</p>
            <p>2. التسجيل والحساب...</p>
            <p>3. المكافآت والشروط...</p>
            <p>4. المسؤوليات...</p>
            <p>5. التحديثات...</p>
            <p>6. الملكية...</p>
            <p>7. الخصوصية...</p>
            <p>8. التعديلات...</p>
            <p>9. القانون المعمول به...</p>
            <p>10. التواصل...</p>
            <p>شروط وأحكام استخدام خدمات شركة EFM...</p>
            <p>1. التعريفات...</p>
            <p>2. التسجيل والحساب...</p>
            <p>3. المكافآت والشروط...</p>
            <p>4. المسؤوليات...</p>
            <p>5. التحديثات...</p>
            <p>6. الملكية...</p>
            <p>7. الخصوصية...</p>
            <p>8. التعديلات...</p>
            <p>9. القانون المعمول به...</p>
            <p>10. التواصل...</p>
            <p>شروط وأحكام استخدام خدمات شركة EFM...</p>
            <p>1. التعريفات...</p>
            <p>2. التسجيل والحساب...</p>
            <p>3. المكافآت والشروط...</p>
            <p>4. المسؤوليات...</p>
            <p>5. التحديثات...</p>
            <p>6. الملكية...</p>
            <p>7. الخصوصية...</p>
            <p>8. التعديلات...</p>
            <p>9. القانون المعمول به...</p>
            <p>10. التواصل...</p>
          </div>
        </div>
        <div className="police2-modal-actions">
          <button className="police2-decline" onClick={onClose}>
            لا أوافق
          </button>
          <button className="police2-accept">موافق</button>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // حالة لفتح وإغلاق الموديل

  const openModal = () => {
    setIsModalOpen(true); // فتح الموديل
  };

  const closeModal = () => {
    setIsModalOpen(false); // إغلاق الموديل
  };

  return (
    <div>
      <button onClick={openModal}>عرض الشروط والأحكام</button>{" "}
      {/* الزر الذي يفتح الموديل */}
      {isModalOpen && <Modal onClose={closeModal} />}{" "}
      {/* عرض الموديل عند الضغط على الزر */}
    </div>
  );
};

export default App;
