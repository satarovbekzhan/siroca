import React from "react";

export default () => {
  return (
    <div className="container py-4 flex flex-col gap-4">
      <a href="https://t.me/satarovbekzhan">Автор: Бекжан Сатаров</a>
      <a href="https://docs.google.com/document/d/1Pj6v1i4HH2MI7Su-XmC74rAev8QzlJg5/edit">
        Задание: Cоздать страницу React Js
      </a>
      <h1>Выберите API для дальнейшего использования!</h1>
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="orders/fake"
          className="flex-1 bg-orange-200/25 p-4 rounded-sm border border-orange-100 hover:shadow-lg"
        >
          <h2 className="font-semibold text-lg pb-2">Фиктивный API</h2>
          <p>
            Поддельный АПИ для имитации сервера с небольшим количеством данных.
            Не имеет функций для поиска, сортировки и постраничного разбиения
            данных.
          </p>
        </a>
        <a
          href="orders"
          className="flex-1 bg-emerald-200/25 p-4 rounded-sm border border-emerald-100 hover:shadow-lg"
        >
          <h2 className="font-semibold text-lg pb-2">Действительный API</h2>
          <p>
            Реальная конечная точка с обширным объемом данных и всеми
            функциональными возможностями. Для корректной работы требуется
            специальный VPN-клиент.
          </p>
        </a>
      </div>
    </div>
  );
};
